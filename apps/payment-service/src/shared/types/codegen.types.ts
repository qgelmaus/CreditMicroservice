import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { Context } from "../../context/buildContext";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
};

export type CreatePaymentInput = {
  amountMoney: Scalars["Float"]["input"];
  email: Scalars["String"]["input"];
  method: PaymentMethod;
  reference: Scalars["String"]["input"];
};

export type Mutation = {
  __typename?: "Mutation";
  createPayment: PaymentDetails;
};

export type MutationCreatePaymentArgs = {
  input: CreatePaymentInput;
};

export type PaymentDetails = {
  __typename?: "PaymentDetails";
  amountMoney: Scalars["Float"]["output"];
  createdAt: Scalars["Date"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  paymentDate: Scalars["Date"]["output"];
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  reference: Scalars["String"]["output"];
};

export enum PaymentMethod {
  BankTransfer = "BANK_TRANSFER",
  Manual = "MANUAL",
  Mobilepay = "MOBILEPAY",
  Stripe = "STRIPE",
}

export enum PaymentStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
  Pending = "PENDING",
  Refunded = "REFUNDED",
}

export type Query = {
  __typename?: "Query";
  allPayments: Array<PaymentDetails>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  CreatePaymentInput: CreatePaymentInput;
  Date: ResolverTypeWrapper<Scalars["Date"]["output"]>;
  Float: ResolverTypeWrapper<Scalars["Float"]["output"]>;
  Mutation: ResolverTypeWrapper<{}>;
  PaymentDetails: ResolverTypeWrapper<PaymentDetails>;
  PaymentMethod: PaymentMethod;
  PaymentStatus: PaymentStatus;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"]["output"];
  CreatePaymentInput: CreatePaymentInput;
  Date: Scalars["Date"]["output"];
  Float: Scalars["Float"]["output"];
  Mutation: {};
  PaymentDetails: PaymentDetails;
  Query: {};
  String: Scalars["String"]["output"];
};

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export type MutationResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  createPayment?: Resolver<
    ResolversTypes["PaymentDetails"],
    ParentType,
    ContextType,
    RequireFields<MutationCreatePaymentArgs, "input">
  >;
};

export type PaymentDetailsResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["PaymentDetails"] = ResolversParentTypes["PaymentDetails"],
> = {
  amountMoney?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  paymentDate?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  paymentMethod?: Resolver<
    ResolversTypes["PaymentMethod"],
    ParentType,
    ContextType
  >;
  paymentStatus?: Resolver<
    ResolversTypes["PaymentStatus"],
    ParentType,
    ContextType
  >;
  reference?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  allPayments?: Resolver<
    Array<ResolversTypes["PaymentDetails"]>,
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = Context> = {
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  PaymentDetails?: PaymentDetailsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};
