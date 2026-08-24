#!/usr/bin/env python3
"""Append a lifecycle hook event to the active central trajectory."""

import fcntl
import json
import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

PATTERNS = (
    re.compile(r"(?i)(authorization:\s*bearer\s+)[^\s\"'\\]+"),
    re.compile(r"\b(?:ghp|gho|ghu|ghs|github_pat|art_v2)_[A-Za-z0-9_]+\b"),
    re.compile(r"\bsk-(?:ant-)?[A-Za-z0-9_-]{16,}\b"),
)


def redact(value):
    if isinstance(value, dict):
        return {key: redact(item) for key, item in value.items()}
    if isinstance(value, list):
        return [redact(item) for item in value]
    if isinstance(value, str):
        for index, pattern in enumerate(PATTERNS):
            value = pattern.sub(r"\1[REDACTED]" if index == 0 else "[REDACTED]", value)
    return value


def main():
    target = os.environ.get("CONTROL_CENTER_TRAJECTORY_FILE")
    if not target:
        print("{}")
        return
    try:
        event = json.load(sys.stdin)
    except Exception as exc:
        event = {"logger_error": str(exc)}
    envelope = {
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "source": "hook",
        "event": redact(event),
    }
    path = Path(target)
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a", encoding="utf-8") as stream:
        fcntl.flock(stream.fileno(), fcntl.LOCK_EX)
        stream.write(json.dumps(envelope, separators=(",", ":"), ensure_ascii=False) + "\n")
        stream.flush()
        fcntl.flock(stream.fileno(), fcntl.LOCK_UN)
    print("{}")


if __name__ == "__main__":
    main()
