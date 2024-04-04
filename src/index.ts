import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

/**
 * Handles the root route ('/') and returns a simple "Hello Hono!" text response.
 */

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const port = 3000;
console.log(`Server is running on port ${port}`);

/**
 * Starts the Hono server and listens on the specified port.
 *
 * @param {object} options - The options for the server.
 * @param {function} options.fetch - The fetch function to use for the server.
 * @param {number} options.port - The port to listen on.
 */
serve({
  fetch: app.fetch,
  port,
});
