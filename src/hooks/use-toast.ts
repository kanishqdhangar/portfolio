import { useCallback } from "react";

export const useToast = () => {
  const toast = useCallback(({ title, description, variant }: any) => {
    alert(`${variant === "destructive" ? "❌" : "✅"} ${title}\n${description}`);
  }, []);

  return { toast };
};
