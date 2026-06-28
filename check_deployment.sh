#!/bin/bash
URL="https://tokenland.vercel.app/blog/2026-06-21-vercel-lance-eve-framework-agents-ia"
EXPECTED_TITLE="Vercel lance Eve, un framework d'agents IA pour la production"
TIMEOUT=180  # 3 minutes
INTERVAL=10  # check every 10 seconds
start_time=$(date +%s)

while true; do
    current_time=$(date +%s)
    elapsed=$((current_time - start_time))
    if [ $elapsed -gt $TIMEOUT ]; then
        echo "Timeout: Deployment not detected after $TIMEOUT seconds"
        exit 1
    fi

    # Fetch the page and check for the title
    if curl -s "$URL" | grep -q "$EXPECTED_TITLE"; then
        echo "Deployment detected! Article is live."
        exit 0
    fi

    sleep $INTERVAL
done