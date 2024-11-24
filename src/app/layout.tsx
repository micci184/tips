import "./globals.css";

import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-gray200">
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
