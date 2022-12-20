## Setup

1. `npm create vite` and install the dependencies.
2. Add server config to `vite.config.js`:

```javascript
export default defineConfig({
	plugins: [react()],
	server: {
		hrm: {},
		port: 1337
	}
});
```

3. Remove `"type": "module"` from `package.json`.
4. Run `npm i -D supabase` to add superbase (run `npx supabase --help` to confirm installation).
5. Run `npx supabase init` to initialize supabase.
6. Run `npx supabase start` to run the supabase instance(make sure Docker daemon is running).
7. Create a `.env` file in the root directory and add the following:

```env
VITE_SUPABASE_ANON_KEY=xxx
VITE_SUPABASE_URL=xxx
```

8. Go to [Supabase Projects](https://app.supabase.com/projects) and create a new project.
9. Create `.env.production` and add the following based on the project created in step 8:

```env
VITE_SUPABASE_ANON_KEY=xxx
VITE_SUPABASE_URL=xxx
```

10. Go to [Local Supabase Dashboard](http://localhost:54323) and go to **Authentication** tab and turn off **Confirm Email** locally.
11. Open up `supabase/config.toml` and change `double_confirm_changes` and `enable_confirmations` to `false`. (Leave those on for prod environment.)
12. Create a migration file using `npx supabase migration new original-ddl`.

## E2E Testing(Optional) Using Playwright

1. Run `npm create playwright` to add playwright.
2. In `playwright.config.js`, uncomment the following(also turn on Chrome and Mobile Chrome):

```javascript
webServer: {
	command: 'npm run dev',
	port: 1337,
	reuseExistingServer: true
},
```

3. Install `detect-port` using `npm i -D detect-port`, then create `e2e/utils.js` with the same content.
4. Create `supabase/clear-db-data.sql` with the same content.

## Routing

1. Install `react-router-dom` using `npm i react-router-dom`.