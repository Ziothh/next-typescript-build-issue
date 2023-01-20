import styles from './page.module.css'
import type { FC, ReactElement, ValidationMap, WeakValidationMap } from 'react';

interface AsyncFunctionComponent<P extends Object = {}> {
  (props: P, context?: any): Promise<ReactElement<any, any> | null>;
  propTypes?: WeakValidationMap<P> | undefined;
  contextTypes?: ValidationMap<any> | undefined;
  defaultProps?: Partial<P> | undefined;
  displayName?: string | undefined;
}

export type AsyncFC<P extends Object = {}> = AsyncFunctionComponent<P>;

export type OptionalAsyncFC<P extends Object = {}> = AsyncFC<P> | FC<P>

export type WithParams<
  Props extends Object,
  Params extends Object = {},
  SearchParams extends Object = {}
> = Props & {
  params: Params,
  searchParams: SearchParams,
}

/** A better type than the default `NextPage` type, given by next.
 * This should be given to an app dir page component when you need typesafe params.
 *
 * @param Params - Should match the file system routing like `"/user/[userId]/todos/[todoId]/[tab]"`
 * @param SearchParams - Should match the queries in the url like `"?q=hi&other=hi+again"`
 * @param Props - Rroperties this page should have. This is not needed in most cases because pages don't receive props.
 * */
export type NextPage<
  Params extends object = {},
  SearchParams extends object = {},
  Props extends Object = {},
> = OptionalAsyncFC<WithParams<Props, Params, SearchParams>>

const page: NextPage = ({ params, searchParams }) => (
  null
)
