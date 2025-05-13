import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type CreateGiftAccountInput = {
  email: Scalars['String']['input'];
  purchaseAmount: Scalars['Float']['input'];
};

export type CreatePrepaidAccountInput = {
  email: Scalars['String']['input'];
  pricePerTreatment: Scalars['Float']['input'];
  treatmentCount: Scalars['Int']['input'];
};

export type CreditAccount = {
  availableCredits: Scalars['Int']['output'];
  availableMoney: Scalars['Float']['output'];
  createdAt: Scalars['Date']['output'];
  creditCode: Scalars['String']['output'];
  email: Scalars['String']['output'];
  expiresAt: Scalars['Date']['output'];
  isActive: Scalars['Boolean']['output'];
  originalCredits: Scalars['Int']['output'];
  originalMoney: Scalars['Float']['output'];
  transactions: Array<Maybe<Transaction>>;
  type: CreditAccountType;
};

export type CreditAccountDetailsInput = {
  credits?: InputMaybe<Scalars['Float']['input']>;
  email: Scalars['String']['input'];
  pricePerTreatment?: InputMaybe<Scalars['Float']['input']>;
  treatmentCount?: InputMaybe<Scalars['Int']['input']>;
};

export enum CreditAccountType {
  GiftCard = 'GIFT_CARD',
  PrepaidCard = 'PREPAID_CARD'
}

export type GiftAccount = CreditAccount & {
  __typename?: 'GiftAccount';
  availableCredits: Scalars['Int']['output'];
  availableMoney: Scalars['Float']['output'];
  createdAt: Scalars['Date']['output'];
  creditCode: Scalars['String']['output'];
  email: Scalars['String']['output'];
  expiresAt: Scalars['Date']['output'];
  isActive: Scalars['Boolean']['output'];
  originalCredits: Scalars['Int']['output'];
  originalMoney: Scalars['Float']['output'];
  transactions: Array<Maybe<Transaction>>;
  type: CreditAccountType;
};

export type Mutation = {
  __typename?: 'Mutation';
  cancelCreditAccountFlow: Scalars['Boolean']['output'];
  createGiftAccount: CreditAccount;
  createPrepaidAccount: CreditAccount;
  finalizeCreditAccount: CreditAccount;
  nullifyAccount: CreditAccount;
  refundCredits: CreditAccount;
  refundMoney: CreditAccount;
  selectCreditAccountType: Scalars['Boolean']['output'];
  setCreditAccountEmail: Scalars['Boolean']['output'];
  submitCreditAccountDetails: Scalars['Boolean']['output'];
  transferCredits: Transfer;
  useCredits: CreditAccount;
  validateCreditAccount: Scalars['Boolean']['output'];
};


export type MutationCreateGiftAccountArgs = {
  input: CreateGiftAccountInput;
};


export type MutationCreatePrepaidAccountArgs = {
  input: CreatePrepaidAccountInput;
};


export type MutationNullifyAccountArgs = {
  input?: InputMaybe<NullifyAccountInput>;
};


export type MutationRefundCreditsArgs = {
  input: RefundCreditsInput;
};


export type MutationRefundMoneyArgs = {
  input: RefundMoneyInput;
};


export type MutationSelectCreditAccountTypeArgs = {
  type: CreditAccountType;
};


export type MutationSetCreditAccountEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationSubmitCreditAccountDetailsArgs = {
  details: CreditAccountDetailsInput;
};


export type MutationTransferCreditsArgs = {
  input: TransferCreditsInput;
};


export type MutationUseCreditsArgs = {
  input: UseCreditsInput;
};

export type NullifyAccountInput = {
  creditCode: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
};

export type PrepaidAccount = CreditAccount & {
  __typename?: 'PrepaidAccount';
  availableCredits: Scalars['Int']['output'];
  availableMoney: Scalars['Float']['output'];
  createdAt: Scalars['Date']['output'];
  creditCode: Scalars['String']['output'];
  discountPercentage?: Maybe<Scalars['Float']['output']>;
  email: Scalars['String']['output'];
  expiresAt: Scalars['Date']['output'];
  isActive: Scalars['Boolean']['output'];
  originalCredits: Scalars['Int']['output'];
  originalMoney: Scalars['Float']['output'];
  transactions: Array<Maybe<Transaction>>;
  treatmentCount?: Maybe<Scalars['Int']['output']>;
  type: CreditAccountType;
};

export type Query = {
  __typename?: 'Query';
  allCreditAccounts: Array<CreditAccount>;
  allCreditTransactions: Array<Transaction>;
  creditAccountByCode?: Maybe<CreditAccount>;
  creditAccountByEmail?: Maybe<Array<CreditAccount>>;
  transactionsForAccountByCode?: Maybe<Array<Transaction>>;
};


export type QueryCreditAccountByCodeArgs = {
  code: Scalars['String']['input'];
};


export type QueryCreditAccountByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryTransactionsForAccountByCodeArgs = {
  code: Scalars['String']['input'];
};

export type RefundCreditsInput = {
  cost: Scalars['Float']['input'];
  creditCode: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
};

export type RefundMoneyInput = {
  creditCode: Scalars['String']['input'];
  money: Scalars['Float']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  createdAt: Scalars['Date']['output'];
  creditCode: Scalars['String']['output'];
  credits: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  money: Scalars['Float']['output'];
  note?: Maybe<Scalars['String']['output']>;
  type: TransactionType;
};

export enum TransactionType {
  Nullification = 'NULLIFICATION',
  Purchase = 'PURCHASE',
  Refund = 'REFUND',
  TransferIn = 'TRANSFER_IN',
  TransferOut = 'TRANSFER_OUT',
  Usage = 'USAGE'
}

export type Transfer = {
  __typename?: 'Transfer';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['Date']['output'];
  fromTransactionId: Scalars['Int']['output'];
  toTransactionId: Scalars['Int']['output'];
};

export type TransferCreditsInput = {
  amount: Scalars['Float']['input'];
  fromCreditCode: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  toCreditCode: Scalars['String']['input'];
};

export type UseCreditsInput = {
  cost: Scalars['Float']['input'];
  creditCode: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  CreditAccount: ( GiftAccount ) | ( PrepaidAccount );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateGiftAccountInput: CreateGiftAccountInput;
  CreatePrepaidAccountInput: CreatePrepaidAccountInput;
  CreditAccount: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['CreditAccount']>;
  CreditAccountDetailsInput: CreditAccountDetailsInput;
  CreditAccountType: CreditAccountType;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GiftAccount: ResolverTypeWrapper<GiftAccount>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  NullifyAccountInput: NullifyAccountInput;
  PrepaidAccount: ResolverTypeWrapper<PrepaidAccount>;
  Query: ResolverTypeWrapper<{}>;
  RefundCreditsInput: RefundCreditsInput;
  RefundMoneyInput: RefundMoneyInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Transaction: ResolverTypeWrapper<Transaction>;
  TransactionType: TransactionType;
  Transfer: ResolverTypeWrapper<Transfer>;
  TransferCreditsInput: TransferCreditsInput;
  UseCreditsInput: UseCreditsInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  CreateGiftAccountInput: CreateGiftAccountInput;
  CreatePrepaidAccountInput: CreatePrepaidAccountInput;
  CreditAccount: ResolversInterfaceTypes<ResolversParentTypes>['CreditAccount'];
  CreditAccountDetailsInput: CreditAccountDetailsInput;
  Date: Scalars['Date']['output'];
  Float: Scalars['Float']['output'];
  GiftAccount: GiftAccount;
  Int: Scalars['Int']['output'];
  Mutation: {};
  NullifyAccountInput: NullifyAccountInput;
  PrepaidAccount: PrepaidAccount;
  Query: {};
  RefundCreditsInput: RefundCreditsInput;
  RefundMoneyInput: RefundMoneyInput;
  String: Scalars['String']['output'];
  Transaction: Transaction;
  Transfer: Transfer;
  TransferCreditsInput: TransferCreditsInput;
  UseCreditsInput: UseCreditsInput;
};

export type CreditAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreditAccount'] = ResolversParentTypes['CreditAccount']> = {
  __resolveType: TypeResolveFn<'GiftAccount' | 'PrepaidAccount', ParentType, ContextType>;
  availableCredits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  availableMoney?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  creditCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expiresAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  originalCredits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  originalMoney?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  transactions?: Resolver<Array<Maybe<ResolversTypes['Transaction']>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['CreditAccountType'], ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type GiftAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['GiftAccount'] = ResolversParentTypes['GiftAccount']> = {
  availableCredits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  availableMoney?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  creditCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expiresAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  originalCredits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  originalMoney?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  transactions?: Resolver<Array<Maybe<ResolversTypes['Transaction']>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['CreditAccountType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  cancelCreditAccountFlow?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createGiftAccount?: Resolver<ResolversTypes['CreditAccount'], ParentType, ContextType, RequireFields<MutationCreateGiftAccountArgs, 'input'>>;
  createPrepaidAccount?: Resolver<ResolversTypes['CreditAccount'], ParentType, ContextType, RequireFields<MutationCreatePrepaidAccountArgs, 'input'>>;
  finalizeCreditAccount?: Resolver<ResolversTypes['CreditAccount'], ParentType, ContextType>;
  nullifyAccount?: Resolver<ResolversTypes['CreditAccount'], ParentType, ContextType, Partial<MutationNullifyAccountArgs>>;
  refundCredits?: Resolver<ResolversTypes['CreditAccount'], ParentType, ContextType, RequireFields<MutationRefundCreditsArgs, 'input'>>;
  refundMoney?: Resolver<ResolversTypes['CreditAccount'], ParentType, ContextType, RequireFields<MutationRefundMoneyArgs, 'input'>>;
  selectCreditAccountType?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSelectCreditAccountTypeArgs, 'type'>>;
  setCreditAccountEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSetCreditAccountEmailArgs, 'email'>>;
  submitCreditAccountDetails?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSubmitCreditAccountDetailsArgs, 'details'>>;
  transferCredits?: Resolver<ResolversTypes['Transfer'], ParentType, ContextType, RequireFields<MutationTransferCreditsArgs, 'input'>>;
  useCredits?: Resolver<ResolversTypes['CreditAccount'], ParentType, ContextType, RequireFields<MutationUseCreditsArgs, 'input'>>;
  validateCreditAccount?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type PrepaidAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrepaidAccount'] = ResolversParentTypes['PrepaidAccount']> = {
  availableCredits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  availableMoney?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  creditCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  discountPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expiresAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  originalCredits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  originalMoney?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  transactions?: Resolver<Array<Maybe<ResolversTypes['Transaction']>>, ParentType, ContextType>;
  treatmentCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['CreditAccountType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allCreditAccounts?: Resolver<Array<ResolversTypes['CreditAccount']>, ParentType, ContextType>;
  allCreditTransactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType>;
  creditAccountByCode?: Resolver<Maybe<ResolversTypes['CreditAccount']>, ParentType, ContextType, RequireFields<QueryCreditAccountByCodeArgs, 'code'>>;
  creditAccountByEmail?: Resolver<Maybe<Array<ResolversTypes['CreditAccount']>>, ParentType, ContextType, RequireFields<QueryCreditAccountByEmailArgs, 'email'>>;
  transactionsForAccountByCode?: Resolver<Maybe<Array<ResolversTypes['Transaction']>>, ParentType, ContextType, RequireFields<QueryTransactionsForAccountByCodeArgs, 'code'>>;
};

export type TransactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  creditCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  credits?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  money?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['TransactionType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferResolvers<ContextType = any, ParentType extends ResolversParentTypes['Transfer'] = ResolversParentTypes['Transfer']> = {
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  fromTransactionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  toTransactionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  CreditAccount?: CreditAccountResolvers<ContextType>;
  Date?: GraphQLScalarType;
  GiftAccount?: GiftAccountResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PrepaidAccount?: PrepaidAccountResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  Transfer?: TransferResolvers<ContextType>;
};

