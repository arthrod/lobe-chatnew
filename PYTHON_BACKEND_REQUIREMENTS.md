# Requirements to Replace Next.js Server with a Python Backend using Vite/TSX

1. **Frontend Preservation**

   - Keep the React-based frontend in `src`, but build it with Vite (already present in devDependencies) instead of Next.js.

2. **Routing and API Handling**

   - Implement client-side routing with React Router or similar since Next.js routing will no longer be available.
   - Recreate API endpoints currently handled by Next.js in a Python web framework (e.g., FastAPI or Flask).

3. **Server-Side Features**

   - Port the Edge Runtime API logic from the `src/server` directory to Python.
   - Expose equivalent REST endpoints to maintain compatibility with existing services and Zustand stores.

4. **Build and Dev Workflow**

   - Configure Vite for React+TSX development, referencing project patterns from documentation for folder structure and build commands.
   - Provide scripts to launch the Python backend and Vite dev server concurrently.

5. **Environment Configuration**
   - Translate environment variables defined for Next.js to Python application settings. Keep in mind that variables prefixed with `NEXT_PUBLIC` were previously accessible on the client, so adjust naming or exposure as needed
