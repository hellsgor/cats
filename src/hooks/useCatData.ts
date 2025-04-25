import { CatDto, catsApi } from "../api/cats";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

interface useCatDataProps {
  isEnabled: boolean;
  autoRefresh: {
    auto: boolean;
    delay: number;
  };
}

export function useCatData({ isEnabled, autoRefresh }: useCatDataProps) {
  return useQuery<CatDto[]>({
    queryKey: ["cats", "random"],
    queryFn: (meta: QueryFunctionContext) => catsApi.getRandomCat(meta),
    enabled: isEnabled,
    refetchOnWindowFocus: false,
    refetchInterval: autoRefresh.auto ? autoRefresh.delay : undefined,
  });
}
