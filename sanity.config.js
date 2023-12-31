/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\pages\sanity\[[...index]].jsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schema} from "./sanity/schemas/schema"

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works

export default defineConfig({
  basePath: '/sanity',
  projectId : "dq5y8lv2",
  dataset : "production",
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: "2021-03-25"}),
  ],
})
