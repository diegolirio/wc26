FROM eclipse-temurin:25-jdk AS builder

WORKDIR /app

COPY gradlew settings.gradle.kts ./
COPY gradle ./gradle
COPY shared-libs ./shared-libs
COPY wc26/wc26-core ./wc26/wc26-core
COPY wc26/wc26-api ./wc26/wc26-api

RUN chmod +x ./gradlew && ./gradlew :wc26:wc26-api:clean :wc26:wc26-api:bootJar -x test

FROM eclipse-temurin:25-jre AS runtime

WORKDIR /app

ENV SPRING_PROFILES_ACTIVE=prod \
    JAVA_TOOL_OPTIONS="-XX:MaxRAMPercentage=75 -Djava.security.egd=file:/dev/./urandom"

COPY --from=builder /app/wc26/wc26-api/build/libs/*.jar /app/app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
