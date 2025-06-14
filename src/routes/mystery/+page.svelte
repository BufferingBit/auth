<script lang="ts">
	import LoginForm from "$lib/components/login-form.svelte";
	export let data;
	import { Auth } from "@supabase/auth-ui-svelte"
	import { ThemeSupa } from "@supabase/auth-ui-shared"
	import type { SupabaseClient } from '@supabase/supabase-js';
	import { goto } from "$app/navigation";

	let { supabase, session } = data;
	$: ({ supabase, session} = data)

	$: if(!session){
		goto("/login-01");
	}
</script>
<h1>Mystery unboxed.</h1>