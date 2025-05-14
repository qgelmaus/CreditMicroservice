
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CreditAccount
 * 
 */
export type CreditAccount = $Result.DefaultSelection<Prisma.$CreditAccountPayload>
/**
 * Model CreditTransaction
 * 
 */
export type CreditTransaction = $Result.DefaultSelection<Prisma.$CreditTransactionPayload>
/**
 * Model CreditTransfer
 * 
 */
export type CreditTransfer = $Result.DefaultSelection<Prisma.$CreditTransferPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CreditAccountType: {
  GIFT_CARD: 'GIFT_CARD',
  PREPAID_CARD: 'PREPAID_CARD'
};

export type CreditAccountType = (typeof CreditAccountType)[keyof typeof CreditAccountType]


export const TransactionType: {
  PURCHASE: 'PURCHASE',
  USAGE: 'USAGE',
  NULLIFICATION: 'NULLIFICATION',
  TRANSFER_IN: 'TRANSFER_IN',
  TRANSFER_OUT: 'TRANSFER_OUT',
  REFUND: 'REFUND'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]

}

export type CreditAccountType = $Enums.CreditAccountType

export const CreditAccountType: typeof $Enums.CreditAccountType

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CreditAccounts
 * const creditAccounts = await prisma.creditAccount.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CreditAccounts
   * const creditAccounts = await prisma.creditAccount.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.creditAccount`: Exposes CRUD operations for the **CreditAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditAccounts
    * const creditAccounts = await prisma.creditAccount.findMany()
    * ```
    */
  get creditAccount(): Prisma.CreditAccountDelegate<ExtArgs>;

  /**
   * `prisma.creditTransaction`: Exposes CRUD operations for the **CreditTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditTransactions
    * const creditTransactions = await prisma.creditTransaction.findMany()
    * ```
    */
  get creditTransaction(): Prisma.CreditTransactionDelegate<ExtArgs>;

  /**
   * `prisma.creditTransfer`: Exposes CRUD operations for the **CreditTransfer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditTransfers
    * const creditTransfers = await prisma.creditTransfer.findMany()
    * ```
    */
  get creditTransfer(): Prisma.CreditTransferDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CreditAccount: 'CreditAccount',
    CreditTransaction: 'CreditTransaction',
    CreditTransfer: 'CreditTransfer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "creditAccount" | "creditTransaction" | "creditTransfer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CreditAccount: {
        payload: Prisma.$CreditAccountPayload<ExtArgs>
        fields: Prisma.CreditAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>
          }
          findFirst: {
            args: Prisma.CreditAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>
          }
          findMany: {
            args: Prisma.CreditAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>[]
          }
          create: {
            args: Prisma.CreditAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>
          }
          createMany: {
            args: Prisma.CreditAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CreditAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>
          }
          update: {
            args: Prisma.CreditAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>
          }
          deleteMany: {
            args: Prisma.CreditAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CreditAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>
          }
          aggregate: {
            args: Prisma.CreditAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditAccount>
          }
          groupBy: {
            args: Prisma.CreditAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditAccountCountArgs<ExtArgs>
            result: $Utils.Optional<CreditAccountCountAggregateOutputType> | number
          }
        }
      }
      CreditTransaction: {
        payload: Prisma.$CreditTransactionPayload<ExtArgs>
        fields: Prisma.CreditTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          findFirst: {
            args: Prisma.CreditTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          findMany: {
            args: Prisma.CreditTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>[]
          }
          create: {
            args: Prisma.CreditTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          createMany: {
            args: Prisma.CreditTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CreditTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          update: {
            args: Prisma.CreditTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          deleteMany: {
            args: Prisma.CreditTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CreditTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          aggregate: {
            args: Prisma.CreditTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditTransaction>
          }
          groupBy: {
            args: Prisma.CreditTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<CreditTransactionCountAggregateOutputType> | number
          }
        }
      }
      CreditTransfer: {
        payload: Prisma.$CreditTransferPayload<ExtArgs>
        fields: Prisma.CreditTransferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditTransferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditTransferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransferPayload>
          }
          findFirst: {
            args: Prisma.CreditTransferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditTransferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransferPayload>
          }
          findMany: {
            args: Prisma.CreditTransferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransferPayload>[]
          }
          create: {
            args: Prisma.CreditTransferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransferPayload>
          }
          createMany: {
            args: Prisma.CreditTransferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CreditTransferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransferPayload>
          }
          update: {
            args: Prisma.CreditTransferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransferPayload>
          }
          deleteMany: {
            args: Prisma.CreditTransferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditTransferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CreditTransferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransferPayload>
          }
          aggregate: {
            args: Prisma.CreditTransferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditTransfer>
          }
          groupBy: {
            args: Prisma.CreditTransferGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditTransferGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditTransferCountArgs<ExtArgs>
            result: $Utils.Optional<CreditTransferCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CreditAccountCountOutputType
   */

  export type CreditAccountCountOutputType = {
    transactions: number
  }

  export type CreditAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CreditAccountCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * CreditAccountCountOutputType without action
   */
  export type CreditAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccountCountOutputType
     */
    select?: CreditAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CreditAccountCountOutputType without action
   */
  export type CreditAccountCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
  }


  /**
   * Count Type CreditTransactionCountOutputType
   */

  export type CreditTransactionCountOutputType = {
    fromTransfer: number
    toTransfer: number
  }

  export type CreditTransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromTransfer?: boolean | CreditTransactionCountOutputTypeCountFromTransferArgs
    toTransfer?: boolean | CreditTransactionCountOutputTypeCountToTransferArgs
  }

  // Custom InputTypes
  /**
   * CreditTransactionCountOutputType without action
   */
  export type CreditTransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransactionCountOutputType
     */
    select?: CreditTransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CreditTransactionCountOutputType without action
   */
  export type CreditTransactionCountOutputTypeCountFromTransferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransferWhereInput
  }

  /**
   * CreditTransactionCountOutputType without action
   */
  export type CreditTransactionCountOutputTypeCountToTransferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransferWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CreditAccount
   */

  export type AggregateCreditAccount = {
    _count: CreditAccountCountAggregateOutputType | null
    _avg: CreditAccountAvgAggregateOutputType | null
    _sum: CreditAccountSumAggregateOutputType | null
    _min: CreditAccountMinAggregateOutputType | null
    _max: CreditAccountMaxAggregateOutputType | null
  }

  export type CreditAccountAvgAggregateOutputType = {
    id: number | null
    originalCredits: number | null
    originalMoney: number | null
    availableCredits: number | null
    availableMoney: number | null
    treatmentCount: number | null
    discountPercentage: number | null
  }

  export type CreditAccountSumAggregateOutputType = {
    id: number | null
    originalCredits: number | null
    originalMoney: number | null
    availableCredits: number | null
    availableMoney: number | null
    treatmentCount: number | null
    discountPercentage: number | null
  }

  export type CreditAccountMinAggregateOutputType = {
    id: number | null
    creditCode: string | null
    type: $Enums.CreditAccountType | null
    originalCredits: number | null
    originalMoney: number | null
    availableCredits: number | null
    availableMoney: number | null
    email: string | null
    treatmentCount: number | null
    discountPercentage: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    paymentReference: string | null
  }

  export type CreditAccountMaxAggregateOutputType = {
    id: number | null
    creditCode: string | null
    type: $Enums.CreditAccountType | null
    originalCredits: number | null
    originalMoney: number | null
    availableCredits: number | null
    availableMoney: number | null
    email: string | null
    treatmentCount: number | null
    discountPercentage: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    paymentReference: string | null
  }

  export type CreditAccountCountAggregateOutputType = {
    id: number
    creditCode: number
    type: number
    originalCredits: number
    originalMoney: number
    availableCredits: number
    availableMoney: number
    email: number
    treatmentCount: number
    discountPercentage: number
    isActive: number
    createdAt: number
    updatedAt: number
    expiresAt: number
    paymentReference: number
    _all: number
  }


  export type CreditAccountAvgAggregateInputType = {
    id?: true
    originalCredits?: true
    originalMoney?: true
    availableCredits?: true
    availableMoney?: true
    treatmentCount?: true
    discountPercentage?: true
  }

  export type CreditAccountSumAggregateInputType = {
    id?: true
    originalCredits?: true
    originalMoney?: true
    availableCredits?: true
    availableMoney?: true
    treatmentCount?: true
    discountPercentage?: true
  }

  export type CreditAccountMinAggregateInputType = {
    id?: true
    creditCode?: true
    type?: true
    originalCredits?: true
    originalMoney?: true
    availableCredits?: true
    availableMoney?: true
    email?: true
    treatmentCount?: true
    discountPercentage?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    paymentReference?: true
  }

  export type CreditAccountMaxAggregateInputType = {
    id?: true
    creditCode?: true
    type?: true
    originalCredits?: true
    originalMoney?: true
    availableCredits?: true
    availableMoney?: true
    email?: true
    treatmentCount?: true
    discountPercentage?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    paymentReference?: true
  }

  export type CreditAccountCountAggregateInputType = {
    id?: true
    creditCode?: true
    type?: true
    originalCredits?: true
    originalMoney?: true
    availableCredits?: true
    availableMoney?: true
    email?: true
    treatmentCount?: true
    discountPercentage?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    paymentReference?: true
    _all?: true
  }

  export type CreditAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditAccount to aggregate.
     */
    where?: CreditAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditAccounts to fetch.
     */
    orderBy?: CreditAccountOrderByWithRelationInput | CreditAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditAccounts
    **/
    _count?: true | CreditAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditAccountMaxAggregateInputType
  }

  export type GetCreditAccountAggregateType<T extends CreditAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditAccount[P]>
      : GetScalarType<T[P], AggregateCreditAccount[P]>
  }




  export type CreditAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditAccountWhereInput
    orderBy?: CreditAccountOrderByWithAggregationInput | CreditAccountOrderByWithAggregationInput[]
    by: CreditAccountScalarFieldEnum[] | CreditAccountScalarFieldEnum
    having?: CreditAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditAccountCountAggregateInputType | true
    _avg?: CreditAccountAvgAggregateInputType
    _sum?: CreditAccountSumAggregateInputType
    _min?: CreditAccountMinAggregateInputType
    _max?: CreditAccountMaxAggregateInputType
  }

  export type CreditAccountGroupByOutputType = {
    id: number
    creditCode: string
    type: $Enums.CreditAccountType
    originalCredits: number
    originalMoney: number
    availableCredits: number
    availableMoney: number
    email: string
    treatmentCount: number | null
    discountPercentage: number | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    expiresAt: Date
    paymentReference: string | null
    _count: CreditAccountCountAggregateOutputType | null
    _avg: CreditAccountAvgAggregateOutputType | null
    _sum: CreditAccountSumAggregateOutputType | null
    _min: CreditAccountMinAggregateOutputType | null
    _max: CreditAccountMaxAggregateOutputType | null
  }

  type GetCreditAccountGroupByPayload<T extends CreditAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditAccountGroupByOutputType[P]>
            : GetScalarType<T[P], CreditAccountGroupByOutputType[P]>
        }
      >
    >


  export type CreditAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creditCode?: boolean
    type?: boolean
    originalCredits?: boolean
    originalMoney?: boolean
    availableCredits?: boolean
    availableMoney?: boolean
    email?: boolean
    treatmentCount?: boolean
    discountPercentage?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    paymentReference?: boolean
    transactions?: boolean | CreditAccount$transactionsArgs<ExtArgs>
    _count?: boolean | CreditAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditAccount"]>


  export type CreditAccountSelectScalar = {
    id?: boolean
    creditCode?: boolean
    type?: boolean
    originalCredits?: boolean
    originalMoney?: boolean
    availableCredits?: boolean
    availableMoney?: boolean
    email?: boolean
    treatmentCount?: boolean
    discountPercentage?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    paymentReference?: boolean
  }

  export type CreditAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CreditAccount$transactionsArgs<ExtArgs>
    _count?: boolean | CreditAccountCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CreditAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditAccount"
    objects: {
      transactions: Prisma.$CreditTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      creditCode: string
      type: $Enums.CreditAccountType
      originalCredits: number
      originalMoney: number
      availableCredits: number
      availableMoney: number
      email: string
      treatmentCount: number | null
      discountPercentage: number | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      expiresAt: Date
      paymentReference: string | null
    }, ExtArgs["result"]["creditAccount"]>
    composites: {}
  }

  type CreditAccountGetPayload<S extends boolean | null | undefined | CreditAccountDefaultArgs> = $Result.GetResult<Prisma.$CreditAccountPayload, S>

  type CreditAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CreditAccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CreditAccountCountAggregateInputType | true
    }

  export interface CreditAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditAccount'], meta: { name: 'CreditAccount' } }
    /**
     * Find zero or one CreditAccount that matches the filter.
     * @param {CreditAccountFindUniqueArgs} args - Arguments to find a CreditAccount
     * @example
     * // Get one CreditAccount
     * const creditAccount = await prisma.creditAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditAccountFindUniqueArgs>(args: SelectSubset<T, CreditAccountFindUniqueArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CreditAccount that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CreditAccountFindUniqueOrThrowArgs} args - Arguments to find a CreditAccount
     * @example
     * // Get one CreditAccount
     * const creditAccount = await prisma.creditAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CreditAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAccountFindFirstArgs} args - Arguments to find a CreditAccount
     * @example
     * // Get one CreditAccount
     * const creditAccount = await prisma.creditAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditAccountFindFirstArgs>(args?: SelectSubset<T, CreditAccountFindFirstArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CreditAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAccountFindFirstOrThrowArgs} args - Arguments to find a CreditAccount
     * @example
     * // Get one CreditAccount
     * const creditAccount = await prisma.creditAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CreditAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditAccounts
     * const creditAccounts = await prisma.creditAccount.findMany()
     * 
     * // Get first 10 CreditAccounts
     * const creditAccounts = await prisma.creditAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditAccountWithIdOnly = await prisma.creditAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditAccountFindManyArgs>(args?: SelectSubset<T, CreditAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CreditAccount.
     * @param {CreditAccountCreateArgs} args - Arguments to create a CreditAccount.
     * @example
     * // Create one CreditAccount
     * const CreditAccount = await prisma.creditAccount.create({
     *   data: {
     *     // ... data to create a CreditAccount
     *   }
     * })
     * 
     */
    create<T extends CreditAccountCreateArgs>(args: SelectSubset<T, CreditAccountCreateArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CreditAccounts.
     * @param {CreditAccountCreateManyArgs} args - Arguments to create many CreditAccounts.
     * @example
     * // Create many CreditAccounts
     * const creditAccount = await prisma.creditAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditAccountCreateManyArgs>(args?: SelectSubset<T, CreditAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CreditAccount.
     * @param {CreditAccountDeleteArgs} args - Arguments to delete one CreditAccount.
     * @example
     * // Delete one CreditAccount
     * const CreditAccount = await prisma.creditAccount.delete({
     *   where: {
     *     // ... filter to delete one CreditAccount
     *   }
     * })
     * 
     */
    delete<T extends CreditAccountDeleteArgs>(args: SelectSubset<T, CreditAccountDeleteArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CreditAccount.
     * @param {CreditAccountUpdateArgs} args - Arguments to update one CreditAccount.
     * @example
     * // Update one CreditAccount
     * const creditAccount = await prisma.creditAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditAccountUpdateArgs>(args: SelectSubset<T, CreditAccountUpdateArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CreditAccounts.
     * @param {CreditAccountDeleteManyArgs} args - Arguments to filter CreditAccounts to delete.
     * @example
     * // Delete a few CreditAccounts
     * const { count } = await prisma.creditAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditAccountDeleteManyArgs>(args?: SelectSubset<T, CreditAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditAccounts
     * const creditAccount = await prisma.creditAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditAccountUpdateManyArgs>(args: SelectSubset<T, CreditAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CreditAccount.
     * @param {CreditAccountUpsertArgs} args - Arguments to update or create a CreditAccount.
     * @example
     * // Update or create a CreditAccount
     * const creditAccount = await prisma.creditAccount.upsert({
     *   create: {
     *     // ... data to create a CreditAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditAccount we want to update
     *   }
     * })
     */
    upsert<T extends CreditAccountUpsertArgs>(args: SelectSubset<T, CreditAccountUpsertArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CreditAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAccountCountArgs} args - Arguments to filter CreditAccounts to count.
     * @example
     * // Count the number of CreditAccounts
     * const count = await prisma.creditAccount.count({
     *   where: {
     *     // ... the filter for the CreditAccounts we want to count
     *   }
     * })
    **/
    count<T extends CreditAccountCountArgs>(
      args?: Subset<T, CreditAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreditAccountAggregateArgs>(args: Subset<T, CreditAccountAggregateArgs>): Prisma.PrismaPromise<GetCreditAccountAggregateType<T>>

    /**
     * Group by CreditAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreditAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditAccountGroupByArgs['orderBy'] }
        : { orderBy?: CreditAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreditAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditAccount model
   */
  readonly fields: CreditAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends CreditAccount$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, CreditAccount$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CreditAccount model
   */ 
  interface CreditAccountFieldRefs {
    readonly id: FieldRef<"CreditAccount", 'Int'>
    readonly creditCode: FieldRef<"CreditAccount", 'String'>
    readonly type: FieldRef<"CreditAccount", 'CreditAccountType'>
    readonly originalCredits: FieldRef<"CreditAccount", 'Float'>
    readonly originalMoney: FieldRef<"CreditAccount", 'Float'>
    readonly availableCredits: FieldRef<"CreditAccount", 'Float'>
    readonly availableMoney: FieldRef<"CreditAccount", 'Float'>
    readonly email: FieldRef<"CreditAccount", 'String'>
    readonly treatmentCount: FieldRef<"CreditAccount", 'Int'>
    readonly discountPercentage: FieldRef<"CreditAccount", 'Float'>
    readonly isActive: FieldRef<"CreditAccount", 'Boolean'>
    readonly createdAt: FieldRef<"CreditAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"CreditAccount", 'DateTime'>
    readonly expiresAt: FieldRef<"CreditAccount", 'DateTime'>
    readonly paymentReference: FieldRef<"CreditAccount", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CreditAccount findUnique
   */
  export type CreditAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * Filter, which CreditAccount to fetch.
     */
    where: CreditAccountWhereUniqueInput
  }

  /**
   * CreditAccount findUniqueOrThrow
   */
  export type CreditAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * Filter, which CreditAccount to fetch.
     */
    where: CreditAccountWhereUniqueInput
  }

  /**
   * CreditAccount findFirst
   */
  export type CreditAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * Filter, which CreditAccount to fetch.
     */
    where?: CreditAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditAccounts to fetch.
     */
    orderBy?: CreditAccountOrderByWithRelationInput | CreditAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditAccounts.
     */
    cursor?: CreditAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditAccounts.
     */
    distinct?: CreditAccountScalarFieldEnum | CreditAccountScalarFieldEnum[]
  }

  /**
   * CreditAccount findFirstOrThrow
   */
  export type CreditAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * Filter, which CreditAccount to fetch.
     */
    where?: CreditAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditAccounts to fetch.
     */
    orderBy?: CreditAccountOrderByWithRelationInput | CreditAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditAccounts.
     */
    cursor?: CreditAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditAccounts.
     */
    distinct?: CreditAccountScalarFieldEnum | CreditAccountScalarFieldEnum[]
  }

  /**
   * CreditAccount findMany
   */
  export type CreditAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * Filter, which CreditAccounts to fetch.
     */
    where?: CreditAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditAccounts to fetch.
     */
    orderBy?: CreditAccountOrderByWithRelationInput | CreditAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditAccounts.
     */
    cursor?: CreditAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditAccounts.
     */
    skip?: number
    distinct?: CreditAccountScalarFieldEnum | CreditAccountScalarFieldEnum[]
  }

  /**
   * CreditAccount create
   */
  export type CreditAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditAccount.
     */
    data: XOR<CreditAccountCreateInput, CreditAccountUncheckedCreateInput>
  }

  /**
   * CreditAccount createMany
   */
  export type CreditAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditAccounts.
     */
    data: CreditAccountCreateManyInput | CreditAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditAccount update
   */
  export type CreditAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditAccount.
     */
    data: XOR<CreditAccountUpdateInput, CreditAccountUncheckedUpdateInput>
    /**
     * Choose, which CreditAccount to update.
     */
    where: CreditAccountWhereUniqueInput
  }

  /**
   * CreditAccount updateMany
   */
  export type CreditAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditAccounts.
     */
    data: XOR<CreditAccountUpdateManyMutationInput, CreditAccountUncheckedUpdateManyInput>
    /**
     * Filter which CreditAccounts to update
     */
    where?: CreditAccountWhereInput
  }

  /**
   * CreditAccount upsert
   */
  export type CreditAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditAccount to update in case it exists.
     */
    where: CreditAccountWhereUniqueInput
    /**
     * In case the CreditAccount found by the `where` argument doesn't exist, create a new CreditAccount with this data.
     */
    create: XOR<CreditAccountCreateInput, CreditAccountUncheckedCreateInput>
    /**
     * In case the CreditAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditAccountUpdateInput, CreditAccountUncheckedUpdateInput>
  }

  /**
   * CreditAccount delete
   */
  export type CreditAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * Filter which CreditAccount to delete.
     */
    where: CreditAccountWhereUniqueInput
  }

  /**
   * CreditAccount deleteMany
   */
  export type CreditAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditAccounts to delete
     */
    where?: CreditAccountWhereInput
  }

  /**
   * CreditAccount.transactions
   */
  export type CreditAccount$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    cursor?: CreditTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditAccount without action
   */
  export type CreditAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
  }


  /**
   * Model CreditTransaction
   */

  export type AggregateCreditTransaction = {
    _count: CreditTransactionCountAggregateOutputType | null
    _avg: CreditTransactionAvgAggregateOutputType | null
    _sum: CreditTransactionSumAggregateOutputType | null
    _min: CreditTransactionMinAggregateOutputType | null
    _max: CreditTransactionMaxAggregateOutputType | null
  }

  export type CreditTransactionAvgAggregateOutputType = {
    id: number | null
    creditAccountId: number | null
    credits: number | null
    money: number | null
  }

  export type CreditTransactionSumAggregateOutputType = {
    id: number | null
    creditAccountId: number | null
    credits: number | null
    money: number | null
  }

  export type CreditTransactionMinAggregateOutputType = {
    id: number | null
    creditAccountId: number | null
    type: $Enums.TransactionType | null
    credits: number | null
    money: number | null
    note: string | null
    createdAt: Date | null
  }

  export type CreditTransactionMaxAggregateOutputType = {
    id: number | null
    creditAccountId: number | null
    type: $Enums.TransactionType | null
    credits: number | null
    money: number | null
    note: string | null
    createdAt: Date | null
  }

  export type CreditTransactionCountAggregateOutputType = {
    id: number
    creditAccountId: number
    type: number
    credits: number
    money: number
    note: number
    createdAt: number
    _all: number
  }


  export type CreditTransactionAvgAggregateInputType = {
    id?: true
    creditAccountId?: true
    credits?: true
    money?: true
  }

  export type CreditTransactionSumAggregateInputType = {
    id?: true
    creditAccountId?: true
    credits?: true
    money?: true
  }

  export type CreditTransactionMinAggregateInputType = {
    id?: true
    creditAccountId?: true
    type?: true
    credits?: true
    money?: true
    note?: true
    createdAt?: true
  }

  export type CreditTransactionMaxAggregateInputType = {
    id?: true
    creditAccountId?: true
    type?: true
    credits?: true
    money?: true
    note?: true
    createdAt?: true
  }

  export type CreditTransactionCountAggregateInputType = {
    id?: true
    creditAccountId?: true
    type?: true
    credits?: true
    money?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type CreditTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransaction to aggregate.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditTransactions
    **/
    _count?: true | CreditTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditTransactionMaxAggregateInputType
  }

  export type GetCreditTransactionAggregateType<T extends CreditTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditTransaction[P]>
      : GetScalarType<T[P], AggregateCreditTransaction[P]>
  }




  export type CreditTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithAggregationInput | CreditTransactionOrderByWithAggregationInput[]
    by: CreditTransactionScalarFieldEnum[] | CreditTransactionScalarFieldEnum
    having?: CreditTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditTransactionCountAggregateInputType | true
    _avg?: CreditTransactionAvgAggregateInputType
    _sum?: CreditTransactionSumAggregateInputType
    _min?: CreditTransactionMinAggregateInputType
    _max?: CreditTransactionMaxAggregateInputType
  }

  export type CreditTransactionGroupByOutputType = {
    id: number
    creditAccountId: number
    type: $Enums.TransactionType
    credits: number
    money: number
    note: string | null
    createdAt: Date
    _count: CreditTransactionCountAggregateOutputType | null
    _avg: CreditTransactionAvgAggregateOutputType | null
    _sum: CreditTransactionSumAggregateOutputType | null
    _min: CreditTransactionMinAggregateOutputType | null
    _max: CreditTransactionMaxAggregateOutputType | null
  }

  type GetCreditTransactionGroupByPayload<T extends CreditTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], CreditTransactionGroupByOutputType[P]>
        }
      >
    >


  export type CreditTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creditAccountId?: boolean
    type?: boolean
    credits?: boolean
    money?: boolean
    note?: boolean
    createdAt?: boolean
    creditAccount?: boolean | CreditAccountDefaultArgs<ExtArgs>
    fromTransfer?: boolean | CreditTransaction$fromTransferArgs<ExtArgs>
    toTransfer?: boolean | CreditTransaction$toTransferArgs<ExtArgs>
    _count?: boolean | CreditTransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditTransaction"]>


  export type CreditTransactionSelectScalar = {
    id?: boolean
    creditAccountId?: boolean
    type?: boolean
    credits?: boolean
    money?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type CreditTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditAccount?: boolean | CreditAccountDefaultArgs<ExtArgs>
    fromTransfer?: boolean | CreditTransaction$fromTransferArgs<ExtArgs>
    toTransfer?: boolean | CreditTransaction$toTransferArgs<ExtArgs>
    _count?: boolean | CreditTransactionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CreditTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditTransaction"
    objects: {
      creditAccount: Prisma.$CreditAccountPayload<ExtArgs>
      fromTransfer: Prisma.$CreditTransferPayload<ExtArgs>[]
      toTransfer: Prisma.$CreditTransferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      creditAccountId: number
      type: $Enums.TransactionType
      credits: number
      money: number
      note: string | null
      createdAt: Date
    }, ExtArgs["result"]["creditTransaction"]>
    composites: {}
  }

  type CreditTransactionGetPayload<S extends boolean | null | undefined | CreditTransactionDefaultArgs> = $Result.GetResult<Prisma.$CreditTransactionPayload, S>

  type CreditTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CreditTransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CreditTransactionCountAggregateInputType | true
    }

  export interface CreditTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditTransaction'], meta: { name: 'CreditTransaction' } }
    /**
     * Find zero or one CreditTransaction that matches the filter.
     * @param {CreditTransactionFindUniqueArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditTransactionFindUniqueArgs>(args: SelectSubset<T, CreditTransactionFindUniqueArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CreditTransaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CreditTransactionFindUniqueOrThrowArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CreditTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindFirstArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditTransactionFindFirstArgs>(args?: SelectSubset<T, CreditTransactionFindFirstArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CreditTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindFirstOrThrowArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CreditTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditTransactions
     * const creditTransactions = await prisma.creditTransaction.findMany()
     * 
     * // Get first 10 CreditTransactions
     * const creditTransactions = await prisma.creditTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditTransactionWithIdOnly = await prisma.creditTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditTransactionFindManyArgs>(args?: SelectSubset<T, CreditTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CreditTransaction.
     * @param {CreditTransactionCreateArgs} args - Arguments to create a CreditTransaction.
     * @example
     * // Create one CreditTransaction
     * const CreditTransaction = await prisma.creditTransaction.create({
     *   data: {
     *     // ... data to create a CreditTransaction
     *   }
     * })
     * 
     */
    create<T extends CreditTransactionCreateArgs>(args: SelectSubset<T, CreditTransactionCreateArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CreditTransactions.
     * @param {CreditTransactionCreateManyArgs} args - Arguments to create many CreditTransactions.
     * @example
     * // Create many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditTransactionCreateManyArgs>(args?: SelectSubset<T, CreditTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CreditTransaction.
     * @param {CreditTransactionDeleteArgs} args - Arguments to delete one CreditTransaction.
     * @example
     * // Delete one CreditTransaction
     * const CreditTransaction = await prisma.creditTransaction.delete({
     *   where: {
     *     // ... filter to delete one CreditTransaction
     *   }
     * })
     * 
     */
    delete<T extends CreditTransactionDeleteArgs>(args: SelectSubset<T, CreditTransactionDeleteArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CreditTransaction.
     * @param {CreditTransactionUpdateArgs} args - Arguments to update one CreditTransaction.
     * @example
     * // Update one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditTransactionUpdateArgs>(args: SelectSubset<T, CreditTransactionUpdateArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CreditTransactions.
     * @param {CreditTransactionDeleteManyArgs} args - Arguments to filter CreditTransactions to delete.
     * @example
     * // Delete a few CreditTransactions
     * const { count } = await prisma.creditTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditTransactionDeleteManyArgs>(args?: SelectSubset<T, CreditTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditTransactionUpdateManyArgs>(args: SelectSubset<T, CreditTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CreditTransaction.
     * @param {CreditTransactionUpsertArgs} args - Arguments to update or create a CreditTransaction.
     * @example
     * // Update or create a CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.upsert({
     *   create: {
     *     // ... data to create a CreditTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditTransaction we want to update
     *   }
     * })
     */
    upsert<T extends CreditTransactionUpsertArgs>(args: SelectSubset<T, CreditTransactionUpsertArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CreditTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionCountArgs} args - Arguments to filter CreditTransactions to count.
     * @example
     * // Count the number of CreditTransactions
     * const count = await prisma.creditTransaction.count({
     *   where: {
     *     // ... the filter for the CreditTransactions we want to count
     *   }
     * })
    **/
    count<T extends CreditTransactionCountArgs>(
      args?: Subset<T, CreditTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreditTransactionAggregateArgs>(args: Subset<T, CreditTransactionAggregateArgs>): Prisma.PrismaPromise<GetCreditTransactionAggregateType<T>>

    /**
     * Group by CreditTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreditTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditTransactionGroupByArgs['orderBy'] }
        : { orderBy?: CreditTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreditTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditTransaction model
   */
  readonly fields: CreditTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creditAccount<T extends CreditAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreditAccountDefaultArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    fromTransfer<T extends CreditTransaction$fromTransferArgs<ExtArgs> = {}>(args?: Subset<T, CreditTransaction$fromTransferArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransferPayload<ExtArgs>, T, "findMany"> | Null>
    toTransfer<T extends CreditTransaction$toTransferArgs<ExtArgs> = {}>(args?: Subset<T, CreditTransaction$toTransferArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransferPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CreditTransaction model
   */ 
  interface CreditTransactionFieldRefs {
    readonly id: FieldRef<"CreditTransaction", 'Int'>
    readonly creditAccountId: FieldRef<"CreditTransaction", 'Int'>
    readonly type: FieldRef<"CreditTransaction", 'TransactionType'>
    readonly credits: FieldRef<"CreditTransaction", 'Float'>
    readonly money: FieldRef<"CreditTransaction", 'Float'>
    readonly note: FieldRef<"CreditTransaction", 'String'>
    readonly createdAt: FieldRef<"CreditTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditTransaction findUnique
   */
  export type CreditTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction findUniqueOrThrow
   */
  export type CreditTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction findFirst
   */
  export type CreditTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransactions.
     */
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction findFirstOrThrow
   */
  export type CreditTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransactions.
     */
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction findMany
   */
  export type CreditTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransactions to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction create
   */
  export type CreditTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditTransaction.
     */
    data: XOR<CreditTransactionCreateInput, CreditTransactionUncheckedCreateInput>
  }

  /**
   * CreditTransaction createMany
   */
  export type CreditTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditTransactions.
     */
    data: CreditTransactionCreateManyInput | CreditTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditTransaction update
   */
  export type CreditTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditTransaction.
     */
    data: XOR<CreditTransactionUpdateInput, CreditTransactionUncheckedUpdateInput>
    /**
     * Choose, which CreditTransaction to update.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction updateMany
   */
  export type CreditTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditTransactions.
     */
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CreditTransactions to update
     */
    where?: CreditTransactionWhereInput
  }

  /**
   * CreditTransaction upsert
   */
  export type CreditTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditTransaction to update in case it exists.
     */
    where: CreditTransactionWhereUniqueInput
    /**
     * In case the CreditTransaction found by the `where` argument doesn't exist, create a new CreditTransaction with this data.
     */
    create: XOR<CreditTransactionCreateInput, CreditTransactionUncheckedCreateInput>
    /**
     * In case the CreditTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditTransactionUpdateInput, CreditTransactionUncheckedUpdateInput>
  }

  /**
   * CreditTransaction delete
   */
  export type CreditTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter which CreditTransaction to delete.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction deleteMany
   */
  export type CreditTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransactions to delete
     */
    where?: CreditTransactionWhereInput
  }

  /**
   * CreditTransaction.fromTransfer
   */
  export type CreditTransaction$fromTransferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransfer
     */
    select?: CreditTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransferInclude<ExtArgs> | null
    where?: CreditTransferWhereInput
    orderBy?: CreditTransferOrderByWithRelationInput | CreditTransferOrderByWithRelationInput[]
    cursor?: CreditTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditTransferScalarFieldEnum | CreditTransferScalarFieldEnum[]
  }

  /**
   * CreditTransaction.toTransfer
   */
  export type CreditTransaction$toTransferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransfer
     */
    select?: CreditTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransferInclude<ExtArgs> | null
    where?: CreditTransferWhereInput
    orderBy?: CreditTransferOrderByWithRelationInput | CreditTransferOrderByWithRelationInput[]
    cursor?: CreditTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditTransferScalarFieldEnum | CreditTransferScalarFieldEnum[]
  }

  /**
   * CreditTransaction without action
   */
  export type CreditTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
  }


  /**
   * Model CreditTransfer
   */

  export type AggregateCreditTransfer = {
    _count: CreditTransferCountAggregateOutputType | null
    _avg: CreditTransferAvgAggregateOutputType | null
    _sum: CreditTransferSumAggregateOutputType | null
    _min: CreditTransferMinAggregateOutputType | null
    _max: CreditTransferMaxAggregateOutputType | null
  }

  export type CreditTransferAvgAggregateOutputType = {
    id: number | null
    fromTransactionId: number | null
    toTransactionId: number | null
    amount: number | null
  }

  export type CreditTransferSumAggregateOutputType = {
    id: number | null
    fromTransactionId: number | null
    toTransactionId: number | null
    amount: number | null
  }

  export type CreditTransferMinAggregateOutputType = {
    id: number | null
    fromTransactionId: number | null
    toTransactionId: number | null
    amount: number | null
    createdAt: Date | null
  }

  export type CreditTransferMaxAggregateOutputType = {
    id: number | null
    fromTransactionId: number | null
    toTransactionId: number | null
    amount: number | null
    createdAt: Date | null
  }

  export type CreditTransferCountAggregateOutputType = {
    id: number
    fromTransactionId: number
    toTransactionId: number
    amount: number
    createdAt: number
    _all: number
  }


  export type CreditTransferAvgAggregateInputType = {
    id?: true
    fromTransactionId?: true
    toTransactionId?: true
    amount?: true
  }

  export type CreditTransferSumAggregateInputType = {
    id?: true
    fromTransactionId?: true
    toTransactionId?: true
    amount?: true
  }

  export type CreditTransferMinAggregateInputType = {
    id?: true
    fromTransactionId?: true
    toTransactionId?: true
    amount?: true
    createdAt?: true
  }

  export type CreditTransferMaxAggregateInputType = {
    id?: true
    fromTransactionId?: true
    toTransactionId?: true
    amount?: true
    createdAt?: true
  }

  export type CreditTransferCountAggregateInputType = {
    id?: true
    fromTransactionId?: true
    toTransactionId?: true
    amount?: true
    createdAt?: true
    _all?: true
  }

  export type CreditTransferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransfer to aggregate.
     */
    where?: CreditTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransfers to fetch.
     */
    orderBy?: CreditTransferOrderByWithRelationInput | CreditTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditTransfers
    **/
    _count?: true | CreditTransferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditTransferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditTransferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditTransferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditTransferMaxAggregateInputType
  }

  export type GetCreditTransferAggregateType<T extends CreditTransferAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditTransfer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditTransfer[P]>
      : GetScalarType<T[P], AggregateCreditTransfer[P]>
  }




  export type CreditTransferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransferWhereInput
    orderBy?: CreditTransferOrderByWithAggregationInput | CreditTransferOrderByWithAggregationInput[]
    by: CreditTransferScalarFieldEnum[] | CreditTransferScalarFieldEnum
    having?: CreditTransferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditTransferCountAggregateInputType | true
    _avg?: CreditTransferAvgAggregateInputType
    _sum?: CreditTransferSumAggregateInputType
    _min?: CreditTransferMinAggregateInputType
    _max?: CreditTransferMaxAggregateInputType
  }

  export type CreditTransferGroupByOutputType = {
    id: number
    fromTransactionId: number
    toTransactionId: number
    amount: number
    createdAt: Date
    _count: CreditTransferCountAggregateOutputType | null
    _avg: CreditTransferAvgAggregateOutputType | null
    _sum: CreditTransferSumAggregateOutputType | null
    _min: CreditTransferMinAggregateOutputType | null
    _max: CreditTransferMaxAggregateOutputType | null
  }

  type GetCreditTransferGroupByPayload<T extends CreditTransferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditTransferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditTransferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditTransferGroupByOutputType[P]>
            : GetScalarType<T[P], CreditTransferGroupByOutputType[P]>
        }
      >
    >


  export type CreditTransferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromTransactionId?: boolean
    toTransactionId?: boolean
    amount?: boolean
    createdAt?: boolean
    fromTransaction?: boolean | CreditTransactionDefaultArgs<ExtArgs>
    toTransaction?: boolean | CreditTransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditTransfer"]>


  export type CreditTransferSelectScalar = {
    id?: boolean
    fromTransactionId?: boolean
    toTransactionId?: boolean
    amount?: boolean
    createdAt?: boolean
  }

  export type CreditTransferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromTransaction?: boolean | CreditTransactionDefaultArgs<ExtArgs>
    toTransaction?: boolean | CreditTransactionDefaultArgs<ExtArgs>
  }

  export type $CreditTransferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditTransfer"
    objects: {
      fromTransaction: Prisma.$CreditTransactionPayload<ExtArgs>
      toTransaction: Prisma.$CreditTransactionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fromTransactionId: number
      toTransactionId: number
      amount: number
      createdAt: Date
    }, ExtArgs["result"]["creditTransfer"]>
    composites: {}
  }

  type CreditTransferGetPayload<S extends boolean | null | undefined | CreditTransferDefaultArgs> = $Result.GetResult<Prisma.$CreditTransferPayload, S>

  type CreditTransferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CreditTransferFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CreditTransferCountAggregateInputType | true
    }

  export interface CreditTransferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditTransfer'], meta: { name: 'CreditTransfer' } }
    /**
     * Find zero or one CreditTransfer that matches the filter.
     * @param {CreditTransferFindUniqueArgs} args - Arguments to find a CreditTransfer
     * @example
     * // Get one CreditTransfer
     * const creditTransfer = await prisma.creditTransfer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditTransferFindUniqueArgs>(args: SelectSubset<T, CreditTransferFindUniqueArgs<ExtArgs>>): Prisma__CreditTransferClient<$Result.GetResult<Prisma.$CreditTransferPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CreditTransfer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CreditTransferFindUniqueOrThrowArgs} args - Arguments to find a CreditTransfer
     * @example
     * // Get one CreditTransfer
     * const creditTransfer = await prisma.creditTransfer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditTransferFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditTransferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditTransferClient<$Result.GetResult<Prisma.$CreditTransferPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CreditTransfer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransferFindFirstArgs} args - Arguments to find a CreditTransfer
     * @example
     * // Get one CreditTransfer
     * const creditTransfer = await prisma.creditTransfer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditTransferFindFirstArgs>(args?: SelectSubset<T, CreditTransferFindFirstArgs<ExtArgs>>): Prisma__CreditTransferClient<$Result.GetResult<Prisma.$CreditTransferPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CreditTransfer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransferFindFirstOrThrowArgs} args - Arguments to find a CreditTransfer
     * @example
     * // Get one CreditTransfer
     * const creditTransfer = await prisma.creditTransfer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditTransferFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditTransferFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditTransferClient<$Result.GetResult<Prisma.$CreditTransferPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CreditTransfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditTransfers
     * const creditTransfers = await prisma.creditTransfer.findMany()
     * 
     * // Get first 10 CreditTransfers
     * const creditTransfers = await prisma.creditTransfer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditTransferWithIdOnly = await prisma.creditTransfer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditTransferFindManyArgs>(args?: SelectSubset<T, CreditTransferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransferPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CreditTransfer.
     * @param {CreditTransferCreateArgs} args - Arguments to create a CreditTransfer.
     * @example
     * // Create one CreditTransfer
     * const CreditTransfer = await prisma.creditTransfer.create({
     *   data: {
     *     // ... data to create a CreditTransfer
     *   }
     * })
     * 
     */
    create<T extends CreditTransferCreateArgs>(args: SelectSubset<T, CreditTransferCreateArgs<ExtArgs>>): Prisma__CreditTransferClient<$Result.GetResult<Prisma.$CreditTransferPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CreditTransfers.
     * @param {CreditTransferCreateManyArgs} args - Arguments to create many CreditTransfers.
     * @example
     * // Create many CreditTransfers
     * const creditTransfer = await prisma.creditTransfer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditTransferCreateManyArgs>(args?: SelectSubset<T, CreditTransferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CreditTransfer.
     * @param {CreditTransferDeleteArgs} args - Arguments to delete one CreditTransfer.
     * @example
     * // Delete one CreditTransfer
     * const CreditTransfer = await prisma.creditTransfer.delete({
     *   where: {
     *     // ... filter to delete one CreditTransfer
     *   }
     * })
     * 
     */
    delete<T extends CreditTransferDeleteArgs>(args: SelectSubset<T, CreditTransferDeleteArgs<ExtArgs>>): Prisma__CreditTransferClient<$Result.GetResult<Prisma.$CreditTransferPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CreditTransfer.
     * @param {CreditTransferUpdateArgs} args - Arguments to update one CreditTransfer.
     * @example
     * // Update one CreditTransfer
     * const creditTransfer = await prisma.creditTransfer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditTransferUpdateArgs>(args: SelectSubset<T, CreditTransferUpdateArgs<ExtArgs>>): Prisma__CreditTransferClient<$Result.GetResult<Prisma.$CreditTransferPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CreditTransfers.
     * @param {CreditTransferDeleteManyArgs} args - Arguments to filter CreditTransfers to delete.
     * @example
     * // Delete a few CreditTransfers
     * const { count } = await prisma.creditTransfer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditTransferDeleteManyArgs>(args?: SelectSubset<T, CreditTransferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditTransfers
     * const creditTransfer = await prisma.creditTransfer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditTransferUpdateManyArgs>(args: SelectSubset<T, CreditTransferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CreditTransfer.
     * @param {CreditTransferUpsertArgs} args - Arguments to update or create a CreditTransfer.
     * @example
     * // Update or create a CreditTransfer
     * const creditTransfer = await prisma.creditTransfer.upsert({
     *   create: {
     *     // ... data to create a CreditTransfer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditTransfer we want to update
     *   }
     * })
     */
    upsert<T extends CreditTransferUpsertArgs>(args: SelectSubset<T, CreditTransferUpsertArgs<ExtArgs>>): Prisma__CreditTransferClient<$Result.GetResult<Prisma.$CreditTransferPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CreditTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransferCountArgs} args - Arguments to filter CreditTransfers to count.
     * @example
     * // Count the number of CreditTransfers
     * const count = await prisma.creditTransfer.count({
     *   where: {
     *     // ... the filter for the CreditTransfers we want to count
     *   }
     * })
    **/
    count<T extends CreditTransferCountArgs>(
      args?: Subset<T, CreditTransferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditTransferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreditTransferAggregateArgs>(args: Subset<T, CreditTransferAggregateArgs>): Prisma.PrismaPromise<GetCreditTransferAggregateType<T>>

    /**
     * Group by CreditTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreditTransferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditTransferGroupByArgs['orderBy'] }
        : { orderBy?: CreditTransferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreditTransferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditTransferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditTransfer model
   */
  readonly fields: CreditTransferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditTransfer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditTransferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromTransaction<T extends CreditTransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreditTransactionDefaultArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    toTransaction<T extends CreditTransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreditTransactionDefaultArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CreditTransfer model
   */ 
  interface CreditTransferFieldRefs {
    readonly id: FieldRef<"CreditTransfer", 'Int'>
    readonly fromTransactionId: FieldRef<"CreditTransfer", 'Int'>
    readonly toTransactionId: FieldRef<"CreditTransfer", 'Int'>
    readonly amount: FieldRef<"CreditTransfer", 'Float'>
    readonly createdAt: FieldRef<"CreditTransfer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditTransfer findUnique
   */
  export type CreditTransferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransfer
     */
    select?: CreditTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransferInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransfer to fetch.
     */
    where: CreditTransferWhereUniqueInput
  }

  /**
   * CreditTransfer findUniqueOrThrow
   */
  export type CreditTransferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransfer
     */
    select?: CreditTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransferInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransfer to fetch.
     */
    where: CreditTransferWhereUniqueInput
  }

  /**
   * CreditTransfer findFirst
   */
  export type CreditTransferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransfer
     */
    select?: CreditTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransferInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransfer to fetch.
     */
    where?: CreditTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransfers to fetch.
     */
    orderBy?: CreditTransferOrderByWithRelationInput | CreditTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransfers.
     */
    cursor?: CreditTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransfers.
     */
    distinct?: CreditTransferScalarFieldEnum | CreditTransferScalarFieldEnum[]
  }

  /**
   * CreditTransfer findFirstOrThrow
   */
  export type CreditTransferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransfer
     */
    select?: CreditTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransferInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransfer to fetch.
     */
    where?: CreditTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransfers to fetch.
     */
    orderBy?: CreditTransferOrderByWithRelationInput | CreditTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransfers.
     */
    cursor?: CreditTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransfers.
     */
    distinct?: CreditTransferScalarFieldEnum | CreditTransferScalarFieldEnum[]
  }

  /**
   * CreditTransfer findMany
   */
  export type CreditTransferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransfer
     */
    select?: CreditTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransferInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransfers to fetch.
     */
    where?: CreditTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransfers to fetch.
     */
    orderBy?: CreditTransferOrderByWithRelationInput | CreditTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditTransfers.
     */
    cursor?: CreditTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransfers.
     */
    skip?: number
    distinct?: CreditTransferScalarFieldEnum | CreditTransferScalarFieldEnum[]
  }

  /**
   * CreditTransfer create
   */
  export type CreditTransferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransfer
     */
    select?: CreditTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransferInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditTransfer.
     */
    data: XOR<CreditTransferCreateInput, CreditTransferUncheckedCreateInput>
  }

  /**
   * CreditTransfer createMany
   */
  export type CreditTransferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditTransfers.
     */
    data: CreditTransferCreateManyInput | CreditTransferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditTransfer update
   */
  export type CreditTransferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransfer
     */
    select?: CreditTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransferInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditTransfer.
     */
    data: XOR<CreditTransferUpdateInput, CreditTransferUncheckedUpdateInput>
    /**
     * Choose, which CreditTransfer to update.
     */
    where: CreditTransferWhereUniqueInput
  }

  /**
   * CreditTransfer updateMany
   */
  export type CreditTransferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditTransfers.
     */
    data: XOR<CreditTransferUpdateManyMutationInput, CreditTransferUncheckedUpdateManyInput>
    /**
     * Filter which CreditTransfers to update
     */
    where?: CreditTransferWhereInput
  }

  /**
   * CreditTransfer upsert
   */
  export type CreditTransferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransfer
     */
    select?: CreditTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransferInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditTransfer to update in case it exists.
     */
    where: CreditTransferWhereUniqueInput
    /**
     * In case the CreditTransfer found by the `where` argument doesn't exist, create a new CreditTransfer with this data.
     */
    create: XOR<CreditTransferCreateInput, CreditTransferUncheckedCreateInput>
    /**
     * In case the CreditTransfer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditTransferUpdateInput, CreditTransferUncheckedUpdateInput>
  }

  /**
   * CreditTransfer delete
   */
  export type CreditTransferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransfer
     */
    select?: CreditTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransferInclude<ExtArgs> | null
    /**
     * Filter which CreditTransfer to delete.
     */
    where: CreditTransferWhereUniqueInput
  }

  /**
   * CreditTransfer deleteMany
   */
  export type CreditTransferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransfers to delete
     */
    where?: CreditTransferWhereInput
  }

  /**
   * CreditTransfer without action
   */
  export type CreditTransferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransfer
     */
    select?: CreditTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransferInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CreditAccountScalarFieldEnum: {
    id: 'id',
    creditCode: 'creditCode',
    type: 'type',
    originalCredits: 'originalCredits',
    originalMoney: 'originalMoney',
    availableCredits: 'availableCredits',
    availableMoney: 'availableMoney',
    email: 'email',
    treatmentCount: 'treatmentCount',
    discountPercentage: 'discountPercentage',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expiresAt: 'expiresAt',
    paymentReference: 'paymentReference'
  };

  export type CreditAccountScalarFieldEnum = (typeof CreditAccountScalarFieldEnum)[keyof typeof CreditAccountScalarFieldEnum]


  export const CreditTransactionScalarFieldEnum: {
    id: 'id',
    creditAccountId: 'creditAccountId',
    type: 'type',
    credits: 'credits',
    money: 'money',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type CreditTransactionScalarFieldEnum = (typeof CreditTransactionScalarFieldEnum)[keyof typeof CreditTransactionScalarFieldEnum]


  export const CreditTransferScalarFieldEnum: {
    id: 'id',
    fromTransactionId: 'fromTransactionId',
    toTransactionId: 'toTransactionId',
    amount: 'amount',
    createdAt: 'createdAt'
  };

  export type CreditTransferScalarFieldEnum = (typeof CreditTransferScalarFieldEnum)[keyof typeof CreditTransferScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'CreditAccountType'
   */
  export type EnumCreditAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreditAccountType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    
  /**
   * Deep Input Types
   */


  export type CreditAccountWhereInput = {
    AND?: CreditAccountWhereInput | CreditAccountWhereInput[]
    OR?: CreditAccountWhereInput[]
    NOT?: CreditAccountWhereInput | CreditAccountWhereInput[]
    id?: IntFilter<"CreditAccount"> | number
    creditCode?: StringFilter<"CreditAccount"> | string
    type?: EnumCreditAccountTypeFilter<"CreditAccount"> | $Enums.CreditAccountType
    originalCredits?: FloatFilter<"CreditAccount"> | number
    originalMoney?: FloatFilter<"CreditAccount"> | number
    availableCredits?: FloatFilter<"CreditAccount"> | number
    availableMoney?: FloatFilter<"CreditAccount"> | number
    email?: StringFilter<"CreditAccount"> | string
    treatmentCount?: IntNullableFilter<"CreditAccount"> | number | null
    discountPercentage?: FloatNullableFilter<"CreditAccount"> | number | null
    isActive?: BoolFilter<"CreditAccount"> | boolean
    createdAt?: DateTimeFilter<"CreditAccount"> | Date | string
    updatedAt?: DateTimeFilter<"CreditAccount"> | Date | string
    expiresAt?: DateTimeFilter<"CreditAccount"> | Date | string
    paymentReference?: StringNullableFilter<"CreditAccount"> | string | null
    transactions?: CreditTransactionListRelationFilter
  }

  export type CreditAccountOrderByWithRelationInput = {
    id?: SortOrder
    creditCode?: SortOrder
    type?: SortOrder
    originalCredits?: SortOrder
    originalMoney?: SortOrder
    availableCredits?: SortOrder
    availableMoney?: SortOrder
    email?: SortOrder
    treatmentCount?: SortOrderInput | SortOrder
    discountPercentage?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    paymentReference?: SortOrderInput | SortOrder
    transactions?: CreditTransactionOrderByRelationAggregateInput
  }

  export type CreditAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    creditCode?: string
    AND?: CreditAccountWhereInput | CreditAccountWhereInput[]
    OR?: CreditAccountWhereInput[]
    NOT?: CreditAccountWhereInput | CreditAccountWhereInput[]
    type?: EnumCreditAccountTypeFilter<"CreditAccount"> | $Enums.CreditAccountType
    originalCredits?: FloatFilter<"CreditAccount"> | number
    originalMoney?: FloatFilter<"CreditAccount"> | number
    availableCredits?: FloatFilter<"CreditAccount"> | number
    availableMoney?: FloatFilter<"CreditAccount"> | number
    email?: StringFilter<"CreditAccount"> | string
    treatmentCount?: IntNullableFilter<"CreditAccount"> | number | null
    discountPercentage?: FloatNullableFilter<"CreditAccount"> | number | null
    isActive?: BoolFilter<"CreditAccount"> | boolean
    createdAt?: DateTimeFilter<"CreditAccount"> | Date | string
    updatedAt?: DateTimeFilter<"CreditAccount"> | Date | string
    expiresAt?: DateTimeFilter<"CreditAccount"> | Date | string
    paymentReference?: StringNullableFilter<"CreditAccount"> | string | null
    transactions?: CreditTransactionListRelationFilter
  }, "id" | "creditCode">

  export type CreditAccountOrderByWithAggregationInput = {
    id?: SortOrder
    creditCode?: SortOrder
    type?: SortOrder
    originalCredits?: SortOrder
    originalMoney?: SortOrder
    availableCredits?: SortOrder
    availableMoney?: SortOrder
    email?: SortOrder
    treatmentCount?: SortOrderInput | SortOrder
    discountPercentage?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    paymentReference?: SortOrderInput | SortOrder
    _count?: CreditAccountCountOrderByAggregateInput
    _avg?: CreditAccountAvgOrderByAggregateInput
    _max?: CreditAccountMaxOrderByAggregateInput
    _min?: CreditAccountMinOrderByAggregateInput
    _sum?: CreditAccountSumOrderByAggregateInput
  }

  export type CreditAccountScalarWhereWithAggregatesInput = {
    AND?: CreditAccountScalarWhereWithAggregatesInput | CreditAccountScalarWhereWithAggregatesInput[]
    OR?: CreditAccountScalarWhereWithAggregatesInput[]
    NOT?: CreditAccountScalarWhereWithAggregatesInput | CreditAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CreditAccount"> | number
    creditCode?: StringWithAggregatesFilter<"CreditAccount"> | string
    type?: EnumCreditAccountTypeWithAggregatesFilter<"CreditAccount"> | $Enums.CreditAccountType
    originalCredits?: FloatWithAggregatesFilter<"CreditAccount"> | number
    originalMoney?: FloatWithAggregatesFilter<"CreditAccount"> | number
    availableCredits?: FloatWithAggregatesFilter<"CreditAccount"> | number
    availableMoney?: FloatWithAggregatesFilter<"CreditAccount"> | number
    email?: StringWithAggregatesFilter<"CreditAccount"> | string
    treatmentCount?: IntNullableWithAggregatesFilter<"CreditAccount"> | number | null
    discountPercentage?: FloatNullableWithAggregatesFilter<"CreditAccount"> | number | null
    isActive?: BoolWithAggregatesFilter<"CreditAccount"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CreditAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CreditAccount"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"CreditAccount"> | Date | string
    paymentReference?: StringNullableWithAggregatesFilter<"CreditAccount"> | string | null
  }

  export type CreditTransactionWhereInput = {
    AND?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    OR?: CreditTransactionWhereInput[]
    NOT?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    id?: IntFilter<"CreditTransaction"> | number
    creditAccountId?: IntFilter<"CreditTransaction"> | number
    type?: EnumTransactionTypeFilter<"CreditTransaction"> | $Enums.TransactionType
    credits?: FloatFilter<"CreditTransaction"> | number
    money?: FloatFilter<"CreditTransaction"> | number
    note?: StringNullableFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
    creditAccount?: XOR<CreditAccountRelationFilter, CreditAccountWhereInput>
    fromTransfer?: CreditTransferListRelationFilter
    toTransfer?: CreditTransferListRelationFilter
  }

  export type CreditTransactionOrderByWithRelationInput = {
    id?: SortOrder
    creditAccountId?: SortOrder
    type?: SortOrder
    credits?: SortOrder
    money?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    creditAccount?: CreditAccountOrderByWithRelationInput
    fromTransfer?: CreditTransferOrderByRelationAggregateInput
    toTransfer?: CreditTransferOrderByRelationAggregateInput
  }

  export type CreditTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    OR?: CreditTransactionWhereInput[]
    NOT?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    creditAccountId?: IntFilter<"CreditTransaction"> | number
    type?: EnumTransactionTypeFilter<"CreditTransaction"> | $Enums.TransactionType
    credits?: FloatFilter<"CreditTransaction"> | number
    money?: FloatFilter<"CreditTransaction"> | number
    note?: StringNullableFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
    creditAccount?: XOR<CreditAccountRelationFilter, CreditAccountWhereInput>
    fromTransfer?: CreditTransferListRelationFilter
    toTransfer?: CreditTransferListRelationFilter
  }, "id">

  export type CreditTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    creditAccountId?: SortOrder
    type?: SortOrder
    credits?: SortOrder
    money?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CreditTransactionCountOrderByAggregateInput
    _avg?: CreditTransactionAvgOrderByAggregateInput
    _max?: CreditTransactionMaxOrderByAggregateInput
    _min?: CreditTransactionMinOrderByAggregateInput
    _sum?: CreditTransactionSumOrderByAggregateInput
  }

  export type CreditTransactionScalarWhereWithAggregatesInput = {
    AND?: CreditTransactionScalarWhereWithAggregatesInput | CreditTransactionScalarWhereWithAggregatesInput[]
    OR?: CreditTransactionScalarWhereWithAggregatesInput[]
    NOT?: CreditTransactionScalarWhereWithAggregatesInput | CreditTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CreditTransaction"> | number
    creditAccountId?: IntWithAggregatesFilter<"CreditTransaction"> | number
    type?: EnumTransactionTypeWithAggregatesFilter<"CreditTransaction"> | $Enums.TransactionType
    credits?: FloatWithAggregatesFilter<"CreditTransaction"> | number
    money?: FloatWithAggregatesFilter<"CreditTransaction"> | number
    note?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CreditTransaction"> | Date | string
  }

  export type CreditTransferWhereInput = {
    AND?: CreditTransferWhereInput | CreditTransferWhereInput[]
    OR?: CreditTransferWhereInput[]
    NOT?: CreditTransferWhereInput | CreditTransferWhereInput[]
    id?: IntFilter<"CreditTransfer"> | number
    fromTransactionId?: IntFilter<"CreditTransfer"> | number
    toTransactionId?: IntFilter<"CreditTransfer"> | number
    amount?: FloatFilter<"CreditTransfer"> | number
    createdAt?: DateTimeFilter<"CreditTransfer"> | Date | string
    fromTransaction?: XOR<CreditTransactionRelationFilter, CreditTransactionWhereInput>
    toTransaction?: XOR<CreditTransactionRelationFilter, CreditTransactionWhereInput>
  }

  export type CreditTransferOrderByWithRelationInput = {
    id?: SortOrder
    fromTransactionId?: SortOrder
    toTransactionId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    fromTransaction?: CreditTransactionOrderByWithRelationInput
    toTransaction?: CreditTransactionOrderByWithRelationInput
  }

  export type CreditTransferWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CreditTransferWhereInput | CreditTransferWhereInput[]
    OR?: CreditTransferWhereInput[]
    NOT?: CreditTransferWhereInput | CreditTransferWhereInput[]
    fromTransactionId?: IntFilter<"CreditTransfer"> | number
    toTransactionId?: IntFilter<"CreditTransfer"> | number
    amount?: FloatFilter<"CreditTransfer"> | number
    createdAt?: DateTimeFilter<"CreditTransfer"> | Date | string
    fromTransaction?: XOR<CreditTransactionRelationFilter, CreditTransactionWhereInput>
    toTransaction?: XOR<CreditTransactionRelationFilter, CreditTransactionWhereInput>
  }, "id">

  export type CreditTransferOrderByWithAggregationInput = {
    id?: SortOrder
    fromTransactionId?: SortOrder
    toTransactionId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    _count?: CreditTransferCountOrderByAggregateInput
    _avg?: CreditTransferAvgOrderByAggregateInput
    _max?: CreditTransferMaxOrderByAggregateInput
    _min?: CreditTransferMinOrderByAggregateInput
    _sum?: CreditTransferSumOrderByAggregateInput
  }

  export type CreditTransferScalarWhereWithAggregatesInput = {
    AND?: CreditTransferScalarWhereWithAggregatesInput | CreditTransferScalarWhereWithAggregatesInput[]
    OR?: CreditTransferScalarWhereWithAggregatesInput[]
    NOT?: CreditTransferScalarWhereWithAggregatesInput | CreditTransferScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CreditTransfer"> | number
    fromTransactionId?: IntWithAggregatesFilter<"CreditTransfer"> | number
    toTransactionId?: IntWithAggregatesFilter<"CreditTransfer"> | number
    amount?: FloatWithAggregatesFilter<"CreditTransfer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CreditTransfer"> | Date | string
  }

  export type CreditAccountCreateInput = {
    creditCode: string
    type: $Enums.CreditAccountType
    originalCredits: number
    originalMoney: number
    availableCredits: number
    availableMoney: number
    email: string
    treatmentCount?: number | null
    discountPercentage?: number | null
    isActive: boolean
    createdAt: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    paymentReference?: string | null
    transactions?: CreditTransactionCreateNestedManyWithoutCreditAccountInput
  }

  export type CreditAccountUncheckedCreateInput = {
    id?: number
    creditCode: string
    type: $Enums.CreditAccountType
    originalCredits: number
    originalMoney: number
    availableCredits: number
    availableMoney: number
    email: string
    treatmentCount?: number | null
    discountPercentage?: number | null
    isActive: boolean
    createdAt: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    paymentReference?: string | null
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutCreditAccountInput
  }

  export type CreditAccountUpdateInput = {
    creditCode?: StringFieldUpdateOperationsInput | string
    type?: EnumCreditAccountTypeFieldUpdateOperationsInput | $Enums.CreditAccountType
    originalCredits?: FloatFieldUpdateOperationsInput | number
    originalMoney?: FloatFieldUpdateOperationsInput | number
    availableCredits?: FloatFieldUpdateOperationsInput | number
    availableMoney?: FloatFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    treatmentCount?: NullableIntFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    transactions?: CreditTransactionUpdateManyWithoutCreditAccountNestedInput
  }

  export type CreditAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    creditCode?: StringFieldUpdateOperationsInput | string
    type?: EnumCreditAccountTypeFieldUpdateOperationsInput | $Enums.CreditAccountType
    originalCredits?: FloatFieldUpdateOperationsInput | number
    originalMoney?: FloatFieldUpdateOperationsInput | number
    availableCredits?: FloatFieldUpdateOperationsInput | number
    availableMoney?: FloatFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    treatmentCount?: NullableIntFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    transactions?: CreditTransactionUncheckedUpdateManyWithoutCreditAccountNestedInput
  }

  export type CreditAccountCreateManyInput = {
    id?: number
    creditCode: string
    type: $Enums.CreditAccountType
    originalCredits: number
    originalMoney: number
    availableCredits: number
    availableMoney: number
    email: string
    treatmentCount?: number | null
    discountPercentage?: number | null
    isActive: boolean
    createdAt: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    paymentReference?: string | null
  }

  export type CreditAccountUpdateManyMutationInput = {
    creditCode?: StringFieldUpdateOperationsInput | string
    type?: EnumCreditAccountTypeFieldUpdateOperationsInput | $Enums.CreditAccountType
    originalCredits?: FloatFieldUpdateOperationsInput | number
    originalMoney?: FloatFieldUpdateOperationsInput | number
    availableCredits?: FloatFieldUpdateOperationsInput | number
    availableMoney?: FloatFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    treatmentCount?: NullableIntFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CreditAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    creditCode?: StringFieldUpdateOperationsInput | string
    type?: EnumCreditAccountTypeFieldUpdateOperationsInput | $Enums.CreditAccountType
    originalCredits?: FloatFieldUpdateOperationsInput | number
    originalMoney?: FloatFieldUpdateOperationsInput | number
    availableCredits?: FloatFieldUpdateOperationsInput | number
    availableMoney?: FloatFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    treatmentCount?: NullableIntFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CreditTransactionCreateInput = {
    type: $Enums.TransactionType
    credits: number
    money: number
    note?: string | null
    createdAt?: Date | string
    creditAccount: CreditAccountCreateNestedOneWithoutTransactionsInput
    fromTransfer?: CreditTransferCreateNestedManyWithoutFromTransactionInput
    toTransfer?: CreditTransferCreateNestedManyWithoutToTransactionInput
  }

  export type CreditTransactionUncheckedCreateInput = {
    id?: number
    creditAccountId: number
    type: $Enums.TransactionType
    credits: number
    money: number
    note?: string | null
    createdAt?: Date | string
    fromTransfer?: CreditTransferUncheckedCreateNestedManyWithoutFromTransactionInput
    toTransfer?: CreditTransferUncheckedCreateNestedManyWithoutToTransactionInput
  }

  export type CreditTransactionUpdateInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    credits?: FloatFieldUpdateOperationsInput | number
    money?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditAccount?: CreditAccountUpdateOneRequiredWithoutTransactionsNestedInput
    fromTransfer?: CreditTransferUpdateManyWithoutFromTransactionNestedInput
    toTransfer?: CreditTransferUpdateManyWithoutToTransactionNestedInput
  }

  export type CreditTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    creditAccountId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    credits?: FloatFieldUpdateOperationsInput | number
    money?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromTransfer?: CreditTransferUncheckedUpdateManyWithoutFromTransactionNestedInput
    toTransfer?: CreditTransferUncheckedUpdateManyWithoutToTransactionNestedInput
  }

  export type CreditTransactionCreateManyInput = {
    id?: number
    creditAccountId: number
    type: $Enums.TransactionType
    credits: number
    money: number
    note?: string | null
    createdAt?: Date | string
  }

  export type CreditTransactionUpdateManyMutationInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    credits?: FloatFieldUpdateOperationsInput | number
    money?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    creditAccountId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    credits?: FloatFieldUpdateOperationsInput | number
    money?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransferCreateInput = {
    amount: number
    createdAt?: Date | string
    fromTransaction: CreditTransactionCreateNestedOneWithoutFromTransferInput
    toTransaction: CreditTransactionCreateNestedOneWithoutToTransferInput
  }

  export type CreditTransferUncheckedCreateInput = {
    id?: number
    fromTransactionId: number
    toTransactionId: number
    amount: number
    createdAt?: Date | string
  }

  export type CreditTransferUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromTransaction?: CreditTransactionUpdateOneRequiredWithoutFromTransferNestedInput
    toTransaction?: CreditTransactionUpdateOneRequiredWithoutToTransferNestedInput
  }

  export type CreditTransferUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromTransactionId?: IntFieldUpdateOperationsInput | number
    toTransactionId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransferCreateManyInput = {
    id?: number
    fromTransactionId: number
    toTransactionId: number
    amount: number
    createdAt?: Date | string
  }

  export type CreditTransferUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransferUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromTransactionId?: IntFieldUpdateOperationsInput | number
    toTransactionId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumCreditAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditAccountType | EnumCreditAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditAccountType[]
    notIn?: $Enums.CreditAccountType[]
    not?: NestedEnumCreditAccountTypeFilter<$PrismaModel> | $Enums.CreditAccountType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CreditTransactionListRelationFilter = {
    every?: CreditTransactionWhereInput
    some?: CreditTransactionWhereInput
    none?: CreditTransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CreditTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreditAccountCountOrderByAggregateInput = {
    id?: SortOrder
    creditCode?: SortOrder
    type?: SortOrder
    originalCredits?: SortOrder
    originalMoney?: SortOrder
    availableCredits?: SortOrder
    availableMoney?: SortOrder
    email?: SortOrder
    treatmentCount?: SortOrder
    discountPercentage?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    paymentReference?: SortOrder
  }

  export type CreditAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    originalCredits?: SortOrder
    originalMoney?: SortOrder
    availableCredits?: SortOrder
    availableMoney?: SortOrder
    treatmentCount?: SortOrder
    discountPercentage?: SortOrder
  }

  export type CreditAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    creditCode?: SortOrder
    type?: SortOrder
    originalCredits?: SortOrder
    originalMoney?: SortOrder
    availableCredits?: SortOrder
    availableMoney?: SortOrder
    email?: SortOrder
    treatmentCount?: SortOrder
    discountPercentage?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    paymentReference?: SortOrder
  }

  export type CreditAccountMinOrderByAggregateInput = {
    id?: SortOrder
    creditCode?: SortOrder
    type?: SortOrder
    originalCredits?: SortOrder
    originalMoney?: SortOrder
    availableCredits?: SortOrder
    availableMoney?: SortOrder
    email?: SortOrder
    treatmentCount?: SortOrder
    discountPercentage?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    paymentReference?: SortOrder
  }

  export type CreditAccountSumOrderByAggregateInput = {
    id?: SortOrder
    originalCredits?: SortOrder
    originalMoney?: SortOrder
    availableCredits?: SortOrder
    availableMoney?: SortOrder
    treatmentCount?: SortOrder
    discountPercentage?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumCreditAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditAccountType | EnumCreditAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditAccountType[]
    notIn?: $Enums.CreditAccountType[]
    not?: NestedEnumCreditAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.CreditAccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreditAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumCreditAccountTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type CreditAccountRelationFilter = {
    is?: CreditAccountWhereInput
    isNot?: CreditAccountWhereInput
  }

  export type CreditTransferListRelationFilter = {
    every?: CreditTransferWhereInput
    some?: CreditTransferWhereInput
    none?: CreditTransferWhereInput
  }

  export type CreditTransferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreditTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    creditAccountId?: SortOrder
    type?: SortOrder
    credits?: SortOrder
    money?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    creditAccountId?: SortOrder
    credits?: SortOrder
    money?: SortOrder
  }

  export type CreditTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    creditAccountId?: SortOrder
    type?: SortOrder
    credits?: SortOrder
    money?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    creditAccountId?: SortOrder
    type?: SortOrder
    credits?: SortOrder
    money?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    creditAccountId?: SortOrder
    credits?: SortOrder
    money?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type CreditTransactionRelationFilter = {
    is?: CreditTransactionWhereInput
    isNot?: CreditTransactionWhereInput
  }

  export type CreditTransferCountOrderByAggregateInput = {
    id?: SortOrder
    fromTransactionId?: SortOrder
    toTransactionId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransferAvgOrderByAggregateInput = {
    id?: SortOrder
    fromTransactionId?: SortOrder
    toTransactionId?: SortOrder
    amount?: SortOrder
  }

  export type CreditTransferMaxOrderByAggregateInput = {
    id?: SortOrder
    fromTransactionId?: SortOrder
    toTransactionId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransferMinOrderByAggregateInput = {
    id?: SortOrder
    fromTransactionId?: SortOrder
    toTransactionId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransferSumOrderByAggregateInput = {
    id?: SortOrder
    fromTransactionId?: SortOrder
    toTransactionId?: SortOrder
    amount?: SortOrder
  }

  export type CreditTransactionCreateNestedManyWithoutCreditAccountInput = {
    create?: XOR<CreditTransactionCreateWithoutCreditAccountInput, CreditTransactionUncheckedCreateWithoutCreditAccountInput> | CreditTransactionCreateWithoutCreditAccountInput[] | CreditTransactionUncheckedCreateWithoutCreditAccountInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutCreditAccountInput | CreditTransactionCreateOrConnectWithoutCreditAccountInput[]
    createMany?: CreditTransactionCreateManyCreditAccountInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type CreditTransactionUncheckedCreateNestedManyWithoutCreditAccountInput = {
    create?: XOR<CreditTransactionCreateWithoutCreditAccountInput, CreditTransactionUncheckedCreateWithoutCreditAccountInput> | CreditTransactionCreateWithoutCreditAccountInput[] | CreditTransactionUncheckedCreateWithoutCreditAccountInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutCreditAccountInput | CreditTransactionCreateOrConnectWithoutCreditAccountInput[]
    createMany?: CreditTransactionCreateManyCreditAccountInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumCreditAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.CreditAccountType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CreditTransactionUpdateManyWithoutCreditAccountNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutCreditAccountInput, CreditTransactionUncheckedCreateWithoutCreditAccountInput> | CreditTransactionCreateWithoutCreditAccountInput[] | CreditTransactionUncheckedCreateWithoutCreditAccountInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutCreditAccountInput | CreditTransactionCreateOrConnectWithoutCreditAccountInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutCreditAccountInput | CreditTransactionUpsertWithWhereUniqueWithoutCreditAccountInput[]
    createMany?: CreditTransactionCreateManyCreditAccountInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutCreditAccountInput | CreditTransactionUpdateWithWhereUniqueWithoutCreditAccountInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutCreditAccountInput | CreditTransactionUpdateManyWithWhereWithoutCreditAccountInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CreditTransactionUncheckedUpdateManyWithoutCreditAccountNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutCreditAccountInput, CreditTransactionUncheckedCreateWithoutCreditAccountInput> | CreditTransactionCreateWithoutCreditAccountInput[] | CreditTransactionUncheckedCreateWithoutCreditAccountInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutCreditAccountInput | CreditTransactionCreateOrConnectWithoutCreditAccountInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutCreditAccountInput | CreditTransactionUpsertWithWhereUniqueWithoutCreditAccountInput[]
    createMany?: CreditTransactionCreateManyCreditAccountInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutCreditAccountInput | CreditTransactionUpdateWithWhereUniqueWithoutCreditAccountInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutCreditAccountInput | CreditTransactionUpdateManyWithWhereWithoutCreditAccountInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type CreditAccountCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CreditAccountCreateWithoutTransactionsInput, CreditAccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CreditAccountCreateOrConnectWithoutTransactionsInput
    connect?: CreditAccountWhereUniqueInput
  }

  export type CreditTransferCreateNestedManyWithoutFromTransactionInput = {
    create?: XOR<CreditTransferCreateWithoutFromTransactionInput, CreditTransferUncheckedCreateWithoutFromTransactionInput> | CreditTransferCreateWithoutFromTransactionInput[] | CreditTransferUncheckedCreateWithoutFromTransactionInput[]
    connectOrCreate?: CreditTransferCreateOrConnectWithoutFromTransactionInput | CreditTransferCreateOrConnectWithoutFromTransactionInput[]
    createMany?: CreditTransferCreateManyFromTransactionInputEnvelope
    connect?: CreditTransferWhereUniqueInput | CreditTransferWhereUniqueInput[]
  }

  export type CreditTransferCreateNestedManyWithoutToTransactionInput = {
    create?: XOR<CreditTransferCreateWithoutToTransactionInput, CreditTransferUncheckedCreateWithoutToTransactionInput> | CreditTransferCreateWithoutToTransactionInput[] | CreditTransferUncheckedCreateWithoutToTransactionInput[]
    connectOrCreate?: CreditTransferCreateOrConnectWithoutToTransactionInput | CreditTransferCreateOrConnectWithoutToTransactionInput[]
    createMany?: CreditTransferCreateManyToTransactionInputEnvelope
    connect?: CreditTransferWhereUniqueInput | CreditTransferWhereUniqueInput[]
  }

  export type CreditTransferUncheckedCreateNestedManyWithoutFromTransactionInput = {
    create?: XOR<CreditTransferCreateWithoutFromTransactionInput, CreditTransferUncheckedCreateWithoutFromTransactionInput> | CreditTransferCreateWithoutFromTransactionInput[] | CreditTransferUncheckedCreateWithoutFromTransactionInput[]
    connectOrCreate?: CreditTransferCreateOrConnectWithoutFromTransactionInput | CreditTransferCreateOrConnectWithoutFromTransactionInput[]
    createMany?: CreditTransferCreateManyFromTransactionInputEnvelope
    connect?: CreditTransferWhereUniqueInput | CreditTransferWhereUniqueInput[]
  }

  export type CreditTransferUncheckedCreateNestedManyWithoutToTransactionInput = {
    create?: XOR<CreditTransferCreateWithoutToTransactionInput, CreditTransferUncheckedCreateWithoutToTransactionInput> | CreditTransferCreateWithoutToTransactionInput[] | CreditTransferUncheckedCreateWithoutToTransactionInput[]
    connectOrCreate?: CreditTransferCreateOrConnectWithoutToTransactionInput | CreditTransferCreateOrConnectWithoutToTransactionInput[]
    createMany?: CreditTransferCreateManyToTransactionInputEnvelope
    connect?: CreditTransferWhereUniqueInput | CreditTransferWhereUniqueInput[]
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type CreditAccountUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<CreditAccountCreateWithoutTransactionsInput, CreditAccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CreditAccountCreateOrConnectWithoutTransactionsInput
    upsert?: CreditAccountUpsertWithoutTransactionsInput
    connect?: CreditAccountWhereUniqueInput
    update?: XOR<XOR<CreditAccountUpdateToOneWithWhereWithoutTransactionsInput, CreditAccountUpdateWithoutTransactionsInput>, CreditAccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type CreditTransferUpdateManyWithoutFromTransactionNestedInput = {
    create?: XOR<CreditTransferCreateWithoutFromTransactionInput, CreditTransferUncheckedCreateWithoutFromTransactionInput> | CreditTransferCreateWithoutFromTransactionInput[] | CreditTransferUncheckedCreateWithoutFromTransactionInput[]
    connectOrCreate?: CreditTransferCreateOrConnectWithoutFromTransactionInput | CreditTransferCreateOrConnectWithoutFromTransactionInput[]
    upsert?: CreditTransferUpsertWithWhereUniqueWithoutFromTransactionInput | CreditTransferUpsertWithWhereUniqueWithoutFromTransactionInput[]
    createMany?: CreditTransferCreateManyFromTransactionInputEnvelope
    set?: CreditTransferWhereUniqueInput | CreditTransferWhereUniqueInput[]
    disconnect?: CreditTransferWhereUniqueInput | CreditTransferWhereUniqueInput[]
    delete?: CreditTransferWhereUniqueInput | CreditTransferWhereUniqueInput[]
    connect?: CreditTransferWhereUniqueInput | CreditTransferWhereUniqueInput[]
    update?: CreditTransferUpdateWithWhereUniqueWithoutFromTransactionInput | CreditTransferUpdateWithWhereUniqueWithoutFromTransactionInput[]
    updateMany?: CreditTransferUpdateManyWithWhereWithoutFromTransactionInput | CreditTransferUpdateManyWithWhereWithoutFromTransactionInput[]
    deleteMany?: CreditTransferScalarWhereInput | CreditTransferScalarWhereInput[]
  }

  export type CreditTransferUpdateManyWithoutToTransactionNestedInput = {
    create?: XOR<CreditTransferCreateWithoutToTransactionInput, CreditTransferUncheckedCreateWithoutToTransactionInput> | CreditTransferCreateWithoutToTransactionInput[] | CreditTransferUncheckedCreateWithoutToTransactionInput[]
    connectOrCreate?: CreditTransferCreateOrConnectWithoutToTransactionInput | CreditTransferCreateOrConnectWithoutToTransactionInput[]
    upsert?: CreditTransferUpsertWithWhereUniqueWithoutToTransactionInput | CreditTransferUpsertWithWhereUniqueWithoutToTransactionInput[]
    createMany?: CreditTransferCreateManyToTransactionInputEnvelope
    set?: CreditTransferWhereUniqueInput | CreditTransferWhereUniqueInput[]
    disconnect?: CreditTransferWhereUniqueInput | CreditTransferWhereUniqueInput[]
    delete?: CreditTransferWhereUniqueInput | CreditTransferWhereUniqueInput[]
    connect?: CreditTransferWhereUniqueInput | CreditTransferWhereUniqueInput[]
    update?: CreditTransferUpdateWithWhereUniqueWithoutToTransactionInput | CreditTransferUpdateWithWhereUniqueWithoutToTransactionInput[]
    updateMany?: CreditTransferUpdateManyWithWhereWithoutToTransactionInput | CreditTransferUpdateManyWithWhereWithoutToTransactionInput[]
    deleteMany?: CreditTransferScalarWhereInput | CreditTransferScalarWhereInput[]
  }

  export type CreditTransferUncheckedUpdateManyWithoutFromTransactionNestedInput = {
    create?: XOR<CreditTransferCreateWithoutFromTransactionInput, CreditTransferUncheckedCreateWithoutFromTransactionInput> | CreditTransferCreateWithoutFromTransactionInput[] | CreditTransferUncheckedCreateWithoutFromTransactionInput[]
    connectOrCreate?: CreditTransferCreateOrConnectWithoutFromTransactionInput | CreditTransferCreateOrConnectWithoutFromTransactionInput[]
    upsert?: CreditTransferUpsertWithWhereUniqueWithoutFromTransactionInput | CreditTransferUpsertWithWhereUniqueWithoutFromTransactionInput[]
    createMany?: CreditTransferCreateManyFromTransactionInputEnvelope
    set?: CreditTransferWhereUniqueInput | CreditTransferWhereUniqueInput[]
    disconnect?: CreditTransferWhereUniqueInput | CreditTransferWhereUniqueInput[]
    delete?: CreditTransferWhereUniqueInput | CreditTransferWhereUniqueInput[]
    connect?: CreditTransferWhereUniqueInput | CreditTransferWhereUniqueInput[]
    update?: CreditTransferUpdateWithWhereUniqueWithoutFromTransactionInput | CreditTransferUpdateWithWhereUniqueWithoutFromTransactionInput[]
    updateMany?: CreditTransferUpdateManyWithWhereWithoutFromTransactionInput | CreditTransferUpdateManyWithWhereWithoutFromTransactionInput[]
    deleteMany?: CreditTransferScalarWhereInput | CreditTransferScalarWhereInput[]
  }

  export type CreditTransferUncheckedUpdateManyWithoutToTransactionNestedInput = {
    create?: XOR<CreditTransferCreateWithoutToTransactionInput, CreditTransferUncheckedCreateWithoutToTransactionInput> | CreditTransferCreateWithoutToTransactionInput[] | CreditTransferUncheckedCreateWithoutToTransactionInput[]
    connectOrCreate?: CreditTransferCreateOrConnectWithoutToTransactionInput | CreditTransferCreateOrConnectWithoutToTransactionInput[]
    upsert?: CreditTransferUpsertWithWhereUniqueWithoutToTransactionInput | CreditTransferUpsertWithWhereUniqueWithoutToTransactionInput[]
    createMany?: CreditTransferCreateManyToTransactionInputEnvelope
    set?: CreditTransferWhereUniqueInput | CreditTransferWhereUniqueInput[]
    disconnect?: CreditTransferWhereUniqueInput | CreditTransferWhereUniqueInput[]
    delete?: CreditTransferWhereUniqueInput | CreditTransferWhereUniqueInput[]
    connect?: CreditTransferWhereUniqueInput | CreditTransferWhereUniqueInput[]
    update?: CreditTransferUpdateWithWhereUniqueWithoutToTransactionInput | CreditTransferUpdateWithWhereUniqueWithoutToTransactionInput[]
    updateMany?: CreditTransferUpdateManyWithWhereWithoutToTransactionInput | CreditTransferUpdateManyWithWhereWithoutToTransactionInput[]
    deleteMany?: CreditTransferScalarWhereInput | CreditTransferScalarWhereInput[]
  }

  export type CreditTransactionCreateNestedOneWithoutFromTransferInput = {
    create?: XOR<CreditTransactionCreateWithoutFromTransferInput, CreditTransactionUncheckedCreateWithoutFromTransferInput>
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutFromTransferInput
    connect?: CreditTransactionWhereUniqueInput
  }

  export type CreditTransactionCreateNestedOneWithoutToTransferInput = {
    create?: XOR<CreditTransactionCreateWithoutToTransferInput, CreditTransactionUncheckedCreateWithoutToTransferInput>
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutToTransferInput
    connect?: CreditTransactionWhereUniqueInput
  }

  export type CreditTransactionUpdateOneRequiredWithoutFromTransferNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutFromTransferInput, CreditTransactionUncheckedCreateWithoutFromTransferInput>
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutFromTransferInput
    upsert?: CreditTransactionUpsertWithoutFromTransferInput
    connect?: CreditTransactionWhereUniqueInput
    update?: XOR<XOR<CreditTransactionUpdateToOneWithWhereWithoutFromTransferInput, CreditTransactionUpdateWithoutFromTransferInput>, CreditTransactionUncheckedUpdateWithoutFromTransferInput>
  }

  export type CreditTransactionUpdateOneRequiredWithoutToTransferNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutToTransferInput, CreditTransactionUncheckedCreateWithoutToTransferInput>
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutToTransferInput
    upsert?: CreditTransactionUpsertWithoutToTransferInput
    connect?: CreditTransactionWhereUniqueInput
    update?: XOR<XOR<CreditTransactionUpdateToOneWithWhereWithoutToTransferInput, CreditTransactionUpdateWithoutToTransferInput>, CreditTransactionUncheckedUpdateWithoutToTransferInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumCreditAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditAccountType | EnumCreditAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditAccountType[]
    notIn?: $Enums.CreditAccountType[]
    not?: NestedEnumCreditAccountTypeFilter<$PrismaModel> | $Enums.CreditAccountType
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumCreditAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditAccountType | EnumCreditAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditAccountType[]
    notIn?: $Enums.CreditAccountType[]
    not?: NestedEnumCreditAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.CreditAccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreditAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumCreditAccountTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type CreditTransactionCreateWithoutCreditAccountInput = {
    type: $Enums.TransactionType
    credits: number
    money: number
    note?: string | null
    createdAt?: Date | string
    fromTransfer?: CreditTransferCreateNestedManyWithoutFromTransactionInput
    toTransfer?: CreditTransferCreateNestedManyWithoutToTransactionInput
  }

  export type CreditTransactionUncheckedCreateWithoutCreditAccountInput = {
    id?: number
    type: $Enums.TransactionType
    credits: number
    money: number
    note?: string | null
    createdAt?: Date | string
    fromTransfer?: CreditTransferUncheckedCreateNestedManyWithoutFromTransactionInput
    toTransfer?: CreditTransferUncheckedCreateNestedManyWithoutToTransactionInput
  }

  export type CreditTransactionCreateOrConnectWithoutCreditAccountInput = {
    where: CreditTransactionWhereUniqueInput
    create: XOR<CreditTransactionCreateWithoutCreditAccountInput, CreditTransactionUncheckedCreateWithoutCreditAccountInput>
  }

  export type CreditTransactionCreateManyCreditAccountInputEnvelope = {
    data: CreditTransactionCreateManyCreditAccountInput | CreditTransactionCreateManyCreditAccountInput[]
    skipDuplicates?: boolean
  }

  export type CreditTransactionUpsertWithWhereUniqueWithoutCreditAccountInput = {
    where: CreditTransactionWhereUniqueInput
    update: XOR<CreditTransactionUpdateWithoutCreditAccountInput, CreditTransactionUncheckedUpdateWithoutCreditAccountInput>
    create: XOR<CreditTransactionCreateWithoutCreditAccountInput, CreditTransactionUncheckedCreateWithoutCreditAccountInput>
  }

  export type CreditTransactionUpdateWithWhereUniqueWithoutCreditAccountInput = {
    where: CreditTransactionWhereUniqueInput
    data: XOR<CreditTransactionUpdateWithoutCreditAccountInput, CreditTransactionUncheckedUpdateWithoutCreditAccountInput>
  }

  export type CreditTransactionUpdateManyWithWhereWithoutCreditAccountInput = {
    where: CreditTransactionScalarWhereInput
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyWithoutCreditAccountInput>
  }

  export type CreditTransactionScalarWhereInput = {
    AND?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
    OR?: CreditTransactionScalarWhereInput[]
    NOT?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
    id?: IntFilter<"CreditTransaction"> | number
    creditAccountId?: IntFilter<"CreditTransaction"> | number
    type?: EnumTransactionTypeFilter<"CreditTransaction"> | $Enums.TransactionType
    credits?: FloatFilter<"CreditTransaction"> | number
    money?: FloatFilter<"CreditTransaction"> | number
    note?: StringNullableFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
  }

  export type CreditAccountCreateWithoutTransactionsInput = {
    creditCode: string
    type: $Enums.CreditAccountType
    originalCredits: number
    originalMoney: number
    availableCredits: number
    availableMoney: number
    email: string
    treatmentCount?: number | null
    discountPercentage?: number | null
    isActive: boolean
    createdAt: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    paymentReference?: string | null
  }

  export type CreditAccountUncheckedCreateWithoutTransactionsInput = {
    id?: number
    creditCode: string
    type: $Enums.CreditAccountType
    originalCredits: number
    originalMoney: number
    availableCredits: number
    availableMoney: number
    email: string
    treatmentCount?: number | null
    discountPercentage?: number | null
    isActive: boolean
    createdAt: Date | string
    updatedAt?: Date | string
    expiresAt: Date | string
    paymentReference?: string | null
  }

  export type CreditAccountCreateOrConnectWithoutTransactionsInput = {
    where: CreditAccountWhereUniqueInput
    create: XOR<CreditAccountCreateWithoutTransactionsInput, CreditAccountUncheckedCreateWithoutTransactionsInput>
  }

  export type CreditTransferCreateWithoutFromTransactionInput = {
    amount: number
    createdAt?: Date | string
    toTransaction: CreditTransactionCreateNestedOneWithoutToTransferInput
  }

  export type CreditTransferUncheckedCreateWithoutFromTransactionInput = {
    id?: number
    toTransactionId: number
    amount: number
    createdAt?: Date | string
  }

  export type CreditTransferCreateOrConnectWithoutFromTransactionInput = {
    where: CreditTransferWhereUniqueInput
    create: XOR<CreditTransferCreateWithoutFromTransactionInput, CreditTransferUncheckedCreateWithoutFromTransactionInput>
  }

  export type CreditTransferCreateManyFromTransactionInputEnvelope = {
    data: CreditTransferCreateManyFromTransactionInput | CreditTransferCreateManyFromTransactionInput[]
    skipDuplicates?: boolean
  }

  export type CreditTransferCreateWithoutToTransactionInput = {
    amount: number
    createdAt?: Date | string
    fromTransaction: CreditTransactionCreateNestedOneWithoutFromTransferInput
  }

  export type CreditTransferUncheckedCreateWithoutToTransactionInput = {
    id?: number
    fromTransactionId: number
    amount: number
    createdAt?: Date | string
  }

  export type CreditTransferCreateOrConnectWithoutToTransactionInput = {
    where: CreditTransferWhereUniqueInput
    create: XOR<CreditTransferCreateWithoutToTransactionInput, CreditTransferUncheckedCreateWithoutToTransactionInput>
  }

  export type CreditTransferCreateManyToTransactionInputEnvelope = {
    data: CreditTransferCreateManyToTransactionInput | CreditTransferCreateManyToTransactionInput[]
    skipDuplicates?: boolean
  }

  export type CreditAccountUpsertWithoutTransactionsInput = {
    update: XOR<CreditAccountUpdateWithoutTransactionsInput, CreditAccountUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CreditAccountCreateWithoutTransactionsInput, CreditAccountUncheckedCreateWithoutTransactionsInput>
    where?: CreditAccountWhereInput
  }

  export type CreditAccountUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CreditAccountWhereInput
    data: XOR<CreditAccountUpdateWithoutTransactionsInput, CreditAccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type CreditAccountUpdateWithoutTransactionsInput = {
    creditCode?: StringFieldUpdateOperationsInput | string
    type?: EnumCreditAccountTypeFieldUpdateOperationsInput | $Enums.CreditAccountType
    originalCredits?: FloatFieldUpdateOperationsInput | number
    originalMoney?: FloatFieldUpdateOperationsInput | number
    availableCredits?: FloatFieldUpdateOperationsInput | number
    availableMoney?: FloatFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    treatmentCount?: NullableIntFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CreditAccountUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    creditCode?: StringFieldUpdateOperationsInput | string
    type?: EnumCreditAccountTypeFieldUpdateOperationsInput | $Enums.CreditAccountType
    originalCredits?: FloatFieldUpdateOperationsInput | number
    originalMoney?: FloatFieldUpdateOperationsInput | number
    availableCredits?: FloatFieldUpdateOperationsInput | number
    availableMoney?: FloatFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    treatmentCount?: NullableIntFieldUpdateOperationsInput | number | null
    discountPercentage?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CreditTransferUpsertWithWhereUniqueWithoutFromTransactionInput = {
    where: CreditTransferWhereUniqueInput
    update: XOR<CreditTransferUpdateWithoutFromTransactionInput, CreditTransferUncheckedUpdateWithoutFromTransactionInput>
    create: XOR<CreditTransferCreateWithoutFromTransactionInput, CreditTransferUncheckedCreateWithoutFromTransactionInput>
  }

  export type CreditTransferUpdateWithWhereUniqueWithoutFromTransactionInput = {
    where: CreditTransferWhereUniqueInput
    data: XOR<CreditTransferUpdateWithoutFromTransactionInput, CreditTransferUncheckedUpdateWithoutFromTransactionInput>
  }

  export type CreditTransferUpdateManyWithWhereWithoutFromTransactionInput = {
    where: CreditTransferScalarWhereInput
    data: XOR<CreditTransferUpdateManyMutationInput, CreditTransferUncheckedUpdateManyWithoutFromTransactionInput>
  }

  export type CreditTransferScalarWhereInput = {
    AND?: CreditTransferScalarWhereInput | CreditTransferScalarWhereInput[]
    OR?: CreditTransferScalarWhereInput[]
    NOT?: CreditTransferScalarWhereInput | CreditTransferScalarWhereInput[]
    id?: IntFilter<"CreditTransfer"> | number
    fromTransactionId?: IntFilter<"CreditTransfer"> | number
    toTransactionId?: IntFilter<"CreditTransfer"> | number
    amount?: FloatFilter<"CreditTransfer"> | number
    createdAt?: DateTimeFilter<"CreditTransfer"> | Date | string
  }

  export type CreditTransferUpsertWithWhereUniqueWithoutToTransactionInput = {
    where: CreditTransferWhereUniqueInput
    update: XOR<CreditTransferUpdateWithoutToTransactionInput, CreditTransferUncheckedUpdateWithoutToTransactionInput>
    create: XOR<CreditTransferCreateWithoutToTransactionInput, CreditTransferUncheckedCreateWithoutToTransactionInput>
  }

  export type CreditTransferUpdateWithWhereUniqueWithoutToTransactionInput = {
    where: CreditTransferWhereUniqueInput
    data: XOR<CreditTransferUpdateWithoutToTransactionInput, CreditTransferUncheckedUpdateWithoutToTransactionInput>
  }

  export type CreditTransferUpdateManyWithWhereWithoutToTransactionInput = {
    where: CreditTransferScalarWhereInput
    data: XOR<CreditTransferUpdateManyMutationInput, CreditTransferUncheckedUpdateManyWithoutToTransactionInput>
  }

  export type CreditTransactionCreateWithoutFromTransferInput = {
    type: $Enums.TransactionType
    credits: number
    money: number
    note?: string | null
    createdAt?: Date | string
    creditAccount: CreditAccountCreateNestedOneWithoutTransactionsInput
    toTransfer?: CreditTransferCreateNestedManyWithoutToTransactionInput
  }

  export type CreditTransactionUncheckedCreateWithoutFromTransferInput = {
    id?: number
    creditAccountId: number
    type: $Enums.TransactionType
    credits: number
    money: number
    note?: string | null
    createdAt?: Date | string
    toTransfer?: CreditTransferUncheckedCreateNestedManyWithoutToTransactionInput
  }

  export type CreditTransactionCreateOrConnectWithoutFromTransferInput = {
    where: CreditTransactionWhereUniqueInput
    create: XOR<CreditTransactionCreateWithoutFromTransferInput, CreditTransactionUncheckedCreateWithoutFromTransferInput>
  }

  export type CreditTransactionCreateWithoutToTransferInput = {
    type: $Enums.TransactionType
    credits: number
    money: number
    note?: string | null
    createdAt?: Date | string
    creditAccount: CreditAccountCreateNestedOneWithoutTransactionsInput
    fromTransfer?: CreditTransferCreateNestedManyWithoutFromTransactionInput
  }

  export type CreditTransactionUncheckedCreateWithoutToTransferInput = {
    id?: number
    creditAccountId: number
    type: $Enums.TransactionType
    credits: number
    money: number
    note?: string | null
    createdAt?: Date | string
    fromTransfer?: CreditTransferUncheckedCreateNestedManyWithoutFromTransactionInput
  }

  export type CreditTransactionCreateOrConnectWithoutToTransferInput = {
    where: CreditTransactionWhereUniqueInput
    create: XOR<CreditTransactionCreateWithoutToTransferInput, CreditTransactionUncheckedCreateWithoutToTransferInput>
  }

  export type CreditTransactionUpsertWithoutFromTransferInput = {
    update: XOR<CreditTransactionUpdateWithoutFromTransferInput, CreditTransactionUncheckedUpdateWithoutFromTransferInput>
    create: XOR<CreditTransactionCreateWithoutFromTransferInput, CreditTransactionUncheckedCreateWithoutFromTransferInput>
    where?: CreditTransactionWhereInput
  }

  export type CreditTransactionUpdateToOneWithWhereWithoutFromTransferInput = {
    where?: CreditTransactionWhereInput
    data: XOR<CreditTransactionUpdateWithoutFromTransferInput, CreditTransactionUncheckedUpdateWithoutFromTransferInput>
  }

  export type CreditTransactionUpdateWithoutFromTransferInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    credits?: FloatFieldUpdateOperationsInput | number
    money?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditAccount?: CreditAccountUpdateOneRequiredWithoutTransactionsNestedInput
    toTransfer?: CreditTransferUpdateManyWithoutToTransactionNestedInput
  }

  export type CreditTransactionUncheckedUpdateWithoutFromTransferInput = {
    id?: IntFieldUpdateOperationsInput | number
    creditAccountId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    credits?: FloatFieldUpdateOperationsInput | number
    money?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toTransfer?: CreditTransferUncheckedUpdateManyWithoutToTransactionNestedInput
  }

  export type CreditTransactionUpsertWithoutToTransferInput = {
    update: XOR<CreditTransactionUpdateWithoutToTransferInput, CreditTransactionUncheckedUpdateWithoutToTransferInput>
    create: XOR<CreditTransactionCreateWithoutToTransferInput, CreditTransactionUncheckedCreateWithoutToTransferInput>
    where?: CreditTransactionWhereInput
  }

  export type CreditTransactionUpdateToOneWithWhereWithoutToTransferInput = {
    where?: CreditTransactionWhereInput
    data: XOR<CreditTransactionUpdateWithoutToTransferInput, CreditTransactionUncheckedUpdateWithoutToTransferInput>
  }

  export type CreditTransactionUpdateWithoutToTransferInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    credits?: FloatFieldUpdateOperationsInput | number
    money?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditAccount?: CreditAccountUpdateOneRequiredWithoutTransactionsNestedInput
    fromTransfer?: CreditTransferUpdateManyWithoutFromTransactionNestedInput
  }

  export type CreditTransactionUncheckedUpdateWithoutToTransferInput = {
    id?: IntFieldUpdateOperationsInput | number
    creditAccountId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    credits?: FloatFieldUpdateOperationsInput | number
    money?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromTransfer?: CreditTransferUncheckedUpdateManyWithoutFromTransactionNestedInput
  }

  export type CreditTransactionCreateManyCreditAccountInput = {
    id?: number
    type: $Enums.TransactionType
    credits: number
    money: number
    note?: string | null
    createdAt?: Date | string
  }

  export type CreditTransactionUpdateWithoutCreditAccountInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    credits?: FloatFieldUpdateOperationsInput | number
    money?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromTransfer?: CreditTransferUpdateManyWithoutFromTransactionNestedInput
    toTransfer?: CreditTransferUpdateManyWithoutToTransactionNestedInput
  }

  export type CreditTransactionUncheckedUpdateWithoutCreditAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    credits?: FloatFieldUpdateOperationsInput | number
    money?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromTransfer?: CreditTransferUncheckedUpdateManyWithoutFromTransactionNestedInput
    toTransfer?: CreditTransferUncheckedUpdateManyWithoutToTransactionNestedInput
  }

  export type CreditTransactionUncheckedUpdateManyWithoutCreditAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    credits?: FloatFieldUpdateOperationsInput | number
    money?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransferCreateManyFromTransactionInput = {
    id?: number
    toTransactionId: number
    amount: number
    createdAt?: Date | string
  }

  export type CreditTransferCreateManyToTransactionInput = {
    id?: number
    fromTransactionId: number
    amount: number
    createdAt?: Date | string
  }

  export type CreditTransferUpdateWithoutFromTransactionInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toTransaction?: CreditTransactionUpdateOneRequiredWithoutToTransferNestedInput
  }

  export type CreditTransferUncheckedUpdateWithoutFromTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    toTransactionId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransferUncheckedUpdateManyWithoutFromTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    toTransactionId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransferUpdateWithoutToTransactionInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromTransaction?: CreditTransactionUpdateOneRequiredWithoutFromTransferNestedInput
  }

  export type CreditTransferUncheckedUpdateWithoutToTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromTransactionId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransferUncheckedUpdateManyWithoutToTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromTransactionId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CreditAccountCountOutputTypeDefaultArgs instead
     */
    export type CreditAccountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CreditAccountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CreditTransactionCountOutputTypeDefaultArgs instead
     */
    export type CreditTransactionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CreditTransactionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CreditAccountDefaultArgs instead
     */
    export type CreditAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CreditAccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CreditTransactionDefaultArgs instead
     */
    export type CreditTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CreditTransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CreditTransferDefaultArgs instead
     */
    export type CreditTransferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CreditTransferDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}