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
<div class="mockup-browser border-base-300 border w-full" data-theme="dark">
  <div class="mockup-browser-toolbar">
    <div class="input">https://daisyui.com</div>
  </div>
  <div class="grid place-content-center border-t border-base-300 h-80">Hello, You have achieved this mystery box.</div>

  <div class="hero bg-base-200 min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="DaisyUI"
      class="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
</div>



<style>
	:global(body){
		color: royalblue;
	}
</style>