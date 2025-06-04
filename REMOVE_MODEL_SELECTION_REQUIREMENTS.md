# Requirements to Remove Model Selection from User Preferences

1. **Remove UI Components**

   - Identify components like `src/components/ModelSelect/` used to choose AI models.
   - Remove these components from layouts, feature pages, and settings menus.

2. **Adjust Store Logic**

   - Update selectors and actions in `src/store/user/slices/modelList` so that the model list is static or admin-controlled.
   - Remove or disable any user-facing actions that alter the `modelProviderListForModelSelect` selector.

3. **Database Adjustments**

   - Migrate or clean up tables storing user-selected models. Ensure the default model is stored server-side and not exposed for user editing.

4. **Server APIs**

   - Strip endpoints allowing clients to submit model choices. Instead, serve a fixed model ID from server configuration.

5. **Testing**
   - Update tests under `tests` and `src/store/...` to reflect removal of model-selection features.
