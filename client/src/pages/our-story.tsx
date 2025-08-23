import React from "react";

export default function OurStory() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6 text-methodist-blue">Our Story</h1>
      <p className="text-lg text-gray-700 mb-8">
        Welcome to Blessed United Methodist Church! Our story is one of faith, community, and service. We invite you to learn more about our journey, values, and mission.
      </p>
      {/* Add more content or images here as needed */}
    </div>
  );
}
Diagnosis: The build failed with an error indicating that Rollup failed to resolve the import "react-router-dom" from a specific file in the project (/client/src/components/about.tsx).

Solution:

Verify that the package "react-router-dom" is added to the dependencies or devDependencies in the package.json file of the project.
Since Rollup couldn't resolve the import, explicitly add "react-router-dom" to the build.rollupOptions.external configuration to externalize this module.
After ensuring the package is in the package.json, add "react-router-dom" to the build.rollupOptions.external configuration in the Vite configuration file.