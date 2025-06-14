<script lang="ts">
	import LoginForm from "$lib/components/login-form.svelte";
	export let data;
	import { Auth } from "@supabase/auth-ui-svelte"
	import { ThemeSupa } from "@supabase/auth-ui-shared"
	import type { SupabaseClient } from '@supabase/supabase-js';
	import { goto } from "$app/navigation";

	let { supabase, session } = data;
	$: ({ supabase, session} = data)

	$: if(session){
		goto("/");
	}
</script>

<!-- <div class="flex h-screen w-full items-center justify-center px-4">
	<LoginForm />
</div> -->

<div class = "hero min-h-screen bg-base-300">
	<div class="hero-content w-[800px]">
		<div class="flex flex-col">
			<p>Create an account or login below!</p>
			<!-- Supabase Auth Ui -->
			<Auth 
				supabaseClient = {supabase}
				theme = "dark"
				appearance={{
					theme: ThemeSupa,
					style: {
						input: "width: 400px"
					}
				}}
			
			/>
		</div>
	</div>
</div>
