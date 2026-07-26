import { useRouter } from "@tanstack/react-router";
import { ROUTES } from "../routes.js";

// window.history.back() on a page opened via direct link (no prior in-app
// history) navigates the user out of the app entirely. Falls back to a fixed
// route when there's nothing to go back to within the router's own history.
export function useSafeBack(fallback = ROUTES.HOME) {
  const router = useRouter();

  return () => {
    if (router.history.canGoBack()) {
      router.history.back();
    } else {
      router.navigate({ to: fallback });
    }
  };
}
