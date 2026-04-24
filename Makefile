.PHONY: build-front-back-wc26-api build-back-wc26-api build-back-wc26-async test-backend discover-apps-local ci-local run-front-back build-front run-front clean-front

build-front-back-wc26-api:
	cd wc26 && pnpm install
	cd wc26/wc26-web && pnpm run build
	mkdir -p wc26/wc26-api/src/main/resources/static
	cp -r wc26/wc26-web/out/. wc26/wc26-api/src/main/resources/static/ 2>/dev/null || true
	cp -r wc26/wc26-web/public/. wc26/wc26-api/src/main/resources/static/ 2>/dev/null || true

build-back-wc26-api:
	./gradlew :wc26:wc26-api:clean :wc26:wc26-api:build -x test

build-back-wc26-async:
	@if [ -d wc26/wc26-async ]; then ./gradlew :wc26:wc26-async:clean :wc26:wc26-async:build -x test; else echo "wc26-async not present"; fi

test-backend:
	./gradlew test

discover-apps-local:
	find . -name "*Application.kt" -path "*/src/main/kotlin/*" -print

ci-local: test-backend build-back-wc26-api build-back-wc26-async

build-front:
	cd wc26 && pnpm install

run-front:
	cd wc26 && pnpm install && pnpm run web

clean-front:
	rm -rf wc26/wc26-web/.next wc26/wc26-web/out

run-front-back: build-front-back-wc26-api
	./gradlew :wc26:wc26-api:bootRun

