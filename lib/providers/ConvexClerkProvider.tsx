"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string
);

const ConvexClerkProvider = ({ children }: { children: ReactNode }) => (
  <ClerkProvider
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}
    appearance={{
      layout: {
        socialButtonsVariant: "iconButton",
        logoImageUrl: "/icons/logo.svg",
      },
      elements: {
        socialButtonsIconButton: {
          border: "1px solid rgba(255, 255, 255, 0.2) !important",
        },
        dividerLine: {
          textColor: "white",
          borderColor: "white",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        },
        input: {
          backgroundColor: "#1b1f29",
          textColor: "white",
          placeholderColor: "#15171C",
        },
      },
      variables: {
        colorBackground: "#15171c",
        colorPrimary: "",
        colorText: "white",
      },
    }}
  >
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  </ClerkProvider>
);

export default ConvexClerkProvider;
