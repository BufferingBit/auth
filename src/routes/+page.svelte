<script lang="ts">
	import LoginForm from "$lib/components/login-form.svelte";
	export let data;
	import { Auth } from "@supabase/auth-ui-svelte"
	import { goto } from "$app/navigation";
	let { supabase, session } = data;
	$: ({ supabase, session} = data)

	console.log(supabase);
	console.log(session);

	$: if(session){
		goto("/mystery");
	}

    $: if(!session){
        goto("/login-01");
    }
</script>

<a href="/login-01">Login</a>