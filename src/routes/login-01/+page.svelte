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

<!-- <div class = "hero min-h-screen bg-base-300">
	<div class="hero-content w-[800px]">
		<div class="flex flex-col">
			<p>Create an account or login below!</p>
			<!-- Supabase Auth Ui -->
			<!-- <Auth 
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
</div> -->

<div class="hero bg-base-200 min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
	<div class="text-center lg:text-left">
	  <h1 class="text-5xl font-bold">Login now!</h1>
	  <p class="py-6">
		Login Now, to access mystery box! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repellendus ullam tempora, ratione veritatis, minima porro molestiae aliquam, pariatur sunt vero cupiditate? Consequuntur suscipit ea, inventore, aut cum doloremque, ipsum obcaecati dignissimos voluptatem consectetur quibusdam?
	  </p>
	</div>
	<Auth 
				supabaseClient = {supabase}
				theme = "dark"
				appearance={{
					theme: ThemeSupa,
					style: {
						input: "width: 400px; height: 50px; color: #fff"
					}
				}}
			
			/>
  </div>
</div>

<style>
	:global(body) {
		color: white;
	}
</style>
