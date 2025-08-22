// app/api/app-version/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { platform, currentVersion } = await request.json();

    if (!platform || !currentVersion) {
      return NextResponse.json(
        { message: "Platform and currentVersion are required" },
        { status: 400 }
      );
    }

    // Your version configuration
    const versionConfig = {
      ios: {
        minimumVersion: process.env.IOS_MIN_VERSION || "1.0.0",
        latestVersion: process.env.IOS_LATEST_VERSION || "1.1.0",
        forceUpdate: process.env.IOS_FORCE_UPDATE === "true",
        message:
          process.env.UPDATE_MESSAGE ||
          "A new version is available with improvements and bug fixes.",
        iosStoreUrl:
          process.env.IOS_STORE_URL ||
          "https://apps.apple.com/app/your-app/id123456789",
      },
      android: {
        minimumVersion: process.env.ANDROID_MIN_VERSION || "1.0.0",
        latestVersion: process.env.ANDROID_LATEST_VERSION || "1.1.0",
        forceUpdate: process.env.ANDROID_FORCE_UPDATE === "true",
        message:
          process.env.UPDATE_MESSAGE ||
          "A new version is available with improvements and bug fixes.",
        androidStoreUrl:
          process.env.ANDROID_STORE_URL ||
          "https://play.google.com/store/apps/details?id=your.package.name",
      },
    };

    const config = versionConfig[platform];

    if (!config) {
      return NextResponse.json(
        { message: 'Invalid platform. Use "ios" or "android"' },
        { status: 400 }
      );
    }

    // Optional: Log for analytics/debugging
    console.log(
      `Version check: ${platform} v${currentVersion} from ${request.headers.get(
        "user-agent"
      )}`
    );

    return NextResponse.json({
      minimumVersion: config.minimumVersion,
      latestVersion: config.latestVersion,
      forceUpdate: config.forceUpdate,
      message: config.message,
      iosStoreUrl: config.iosStoreUrl,
      androidStoreUrl: config.androidStoreUrl,
    });
  } catch (error) {
    console.error("Version check API error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// Optional: Handle GET requests for testing
export async function GET() {
  return NextResponse.json({
    message:
      "App version check endpoint. Use POST with platform and currentVersion.",
    example: {
      method: "POST",
      body: {
        platform: "ios", // or 'android'
        currentVersion: "1.0.0",
      },
    },
  });
}
