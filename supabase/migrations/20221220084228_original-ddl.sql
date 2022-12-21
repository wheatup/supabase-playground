CREATE TABLE user_profiles (
	user_id UUID PRIMARY KEY REFERENCES auth.users (id) NOT NULL,
	username TEXT UNIQUE NOT NULL,
	CONSTRAINT proper_username CHECK (username ~* '^[a-zA-Z0-9_]+$'),
	CONSTRAINT username_length CHECK (char_length(username) >= 4 AND char_length(username) <= 20)
);

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "all can see" ON "public"."user_profiles" 
	AS PERMISSIVE FOR SELECT 
	TO public 
	USING (true);

CREATE POLICY "user can insert" ON "public"."user_profiles" 
	AS PERMISSIVE FOR INSERT 
	TO public 
	WITH CHECK (auth.uid() = user_id);

CREATE POLICY "owners can update" ON "public"."user_profiles" 
	AS PERMISSIVE FOR UPDATE 
	TO public 
	USING (auth.uid() = user_id) 
	WITH CHECK (auth.uid() = user_id);