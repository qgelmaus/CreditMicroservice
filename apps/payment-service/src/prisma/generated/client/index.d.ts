/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model PaymentDetails
 *
 */
export type PaymentDetails =
  $Result.DefaultSelection<Prisma.$PaymentDetailsPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const PaymentMethod: {
    STRIPE: "STRIPE";
    MOBILEPAY: "MOBILEPAY";
    BANK_TRANSFER: "BANK_TRANSFER";
    MANUAL: "MANUAL";
  };

  export type PaymentMethod =
    (typeof PaymentMethod)[keyof typeof PaymentMethod];

  export const PaymentStatus: {
    PENDING: "PENDING";
    COMPLETED: "COMPLETED";
    FAILED: "FAILED";
    REFUNDED: "REFUNDED";
  };

  export type PaymentStatus =
    (typeof PaymentStatus)[keyof typeof PaymentStatus];
}

export type PaymentMethod = $Enums.PaymentMethod;

export const PaymentMethod: typeof $Enums.PaymentMethod;

export type PaymentStatus = $Enums.PaymentStatus;

export const PaymentStatus: typeof $Enums.PaymentStatus;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PaymentDetails
 * const paymentDetails = await prisma.paymentDetails.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PaymentDetails
   * const paymentDetails = await prisma.paymentDetails.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.paymentDetails`: Exposes CRUD operations for the **PaymentDetails** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more PaymentDetails
   * const paymentDetails = await prisma.paymentDetails.findMany()
   * ```
   */
  get paymentDetails(): Prisma.PaymentDetailsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    PaymentDetails: "PaymentDetails";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs; clientOptions: PrismaClientOptions },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      this["params"]["clientOptions"]
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > = {
    meta: {
      modelProps: "paymentDetails";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      PaymentDetails: {
        payload: Prisma.$PaymentDetailsPayload<ExtArgs>;
        fields: Prisma.PaymentDetailsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PaymentDetailsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PaymentDetailsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>;
          };
          findFirst: {
            args: Prisma.PaymentDetailsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PaymentDetailsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>;
          };
          findMany: {
            args: Prisma.PaymentDetailsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>[];
          };
          create: {
            args: Prisma.PaymentDetailsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>;
          };
          createMany: {
            args: Prisma.PaymentDetailsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.PaymentDetailsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>;
          };
          update: {
            args: Prisma.PaymentDetailsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>;
          };
          deleteMany: {
            args: Prisma.PaymentDetailsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PaymentDetailsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.PaymentDetailsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>;
          };
          aggregate: {
            args: Prisma.PaymentDetailsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePaymentDetails>;
          };
          groupBy: {
            args: Prisma.PaymentDetailsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PaymentDetailsGroupByOutputType>[];
          };
          count: {
            args: Prisma.PaymentDetailsCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<PaymentDetailsCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
  }

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Models
   */

  /**
   * Model PaymentDetails
   */

  export type AggregatePaymentDetails = {
    _count: PaymentDetailsCountAggregateOutputType | null;
    _avg: PaymentDetailsAvgAggregateOutputType | null;
    _sum: PaymentDetailsSumAggregateOutputType | null;
    _min: PaymentDetailsMinAggregateOutputType | null;
    _max: PaymentDetailsMaxAggregateOutputType | null;
  };

  export type PaymentDetailsAvgAggregateOutputType = {
    amountMoney: number | null;
  };

  export type PaymentDetailsSumAggregateOutputType = {
    amountMoney: number | null;
  };

  export type PaymentDetailsMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    amountMoney: number | null;
    paymentMethod: $Enums.PaymentMethod | null;
    paymentDate: Date | null;
    reference: string | null;
    paymentStatus: $Enums.PaymentStatus | null;
    createdAt: Date | null;
  };

  export type PaymentDetailsMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    amountMoney: number | null;
    paymentMethod: $Enums.PaymentMethod | null;
    paymentDate: Date | null;
    reference: string | null;
    paymentStatus: $Enums.PaymentStatus | null;
    createdAt: Date | null;
  };

  export type PaymentDetailsCountAggregateOutputType = {
    id: number;
    email: number;
    amountMoney: number;
    paymentMethod: number;
    paymentDate: number;
    reference: number;
    paymentStatus: number;
    createdAt: number;
    _all: number;
  };

  export type PaymentDetailsAvgAggregateInputType = {
    amountMoney?: true;
  };

  export type PaymentDetailsSumAggregateInputType = {
    amountMoney?: true;
  };

  export type PaymentDetailsMinAggregateInputType = {
    id?: true;
    email?: true;
    amountMoney?: true;
    paymentMethod?: true;
    paymentDate?: true;
    reference?: true;
    paymentStatus?: true;
    createdAt?: true;
  };

  export type PaymentDetailsMaxAggregateInputType = {
    id?: true;
    email?: true;
    amountMoney?: true;
    paymentMethod?: true;
    paymentDate?: true;
    reference?: true;
    paymentStatus?: true;
    createdAt?: true;
  };

  export type PaymentDetailsCountAggregateInputType = {
    id?: true;
    email?: true;
    amountMoney?: true;
    paymentMethod?: true;
    paymentDate?: true;
    reference?: true;
    paymentStatus?: true;
    createdAt?: true;
    _all?: true;
  };

  export type PaymentDetailsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PaymentDetails to aggregate.
     */
    where?: PaymentDetailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?:
      | PaymentDetailsOrderByWithRelationInput
      | PaymentDetailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PaymentDetailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PaymentDetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PaymentDetails
     **/
    _count?: true | PaymentDetailsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PaymentDetailsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PaymentDetailsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PaymentDetailsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PaymentDetailsMaxAggregateInputType;
  };

  export type GetPaymentDetailsAggregateType<
    T extends PaymentDetailsAggregateArgs,
  > = {
    [P in keyof T & keyof AggregatePaymentDetails]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentDetails[P]>
      : GetScalarType<T[P], AggregatePaymentDetails[P]>;
  };

  export type PaymentDetailsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PaymentDetailsWhereInput;
    orderBy?:
      | PaymentDetailsOrderByWithAggregationInput
      | PaymentDetailsOrderByWithAggregationInput[];
    by: PaymentDetailsScalarFieldEnum[] | PaymentDetailsScalarFieldEnum;
    having?: PaymentDetailsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentDetailsCountAggregateInputType | true;
    _avg?: PaymentDetailsAvgAggregateInputType;
    _sum?: PaymentDetailsSumAggregateInputType;
    _min?: PaymentDetailsMinAggregateInputType;
    _max?: PaymentDetailsMaxAggregateInputType;
  };

  export type PaymentDetailsGroupByOutputType = {
    id: string;
    email: string;
    amountMoney: number;
    paymentMethod: $Enums.PaymentMethod;
    paymentDate: Date;
    reference: string;
    paymentStatus: $Enums.PaymentStatus;
    createdAt: Date;
    _count: PaymentDetailsCountAggregateOutputType | null;
    _avg: PaymentDetailsAvgAggregateOutputType | null;
    _sum: PaymentDetailsSumAggregateOutputType | null;
    _min: PaymentDetailsMinAggregateOutputType | null;
    _max: PaymentDetailsMaxAggregateOutputType | null;
  };

  type GetPaymentDetailsGroupByPayload<T extends PaymentDetailsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PaymentDetailsGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof PaymentDetailsGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentDetailsGroupByOutputType[P]>;
        }
      >
    >;

  export type PaymentDetailsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      amountMoney?: boolean;
      paymentMethod?: boolean;
      paymentDate?: boolean;
      reference?: boolean;
      paymentStatus?: boolean;
      createdAt?: boolean;
    },
    ExtArgs["result"]["paymentDetails"]
  >;

  export type PaymentDetailsSelectScalar = {
    id?: boolean;
    email?: boolean;
    amountMoney?: boolean;
    paymentMethod?: boolean;
    paymentDate?: boolean;
    reference?: boolean;
    paymentStatus?: boolean;
    createdAt?: boolean;
  };

  export type $PaymentDetailsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "PaymentDetails";
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        amountMoney: number;
        paymentMethod: $Enums.PaymentMethod;
        paymentDate: Date;
        reference: string;
        paymentStatus: $Enums.PaymentStatus;
        createdAt: Date;
      },
      ExtArgs["result"]["paymentDetails"]
    >;
    composites: {};
  };

  type PaymentDetailsGetPayload<
    S extends boolean | null | undefined | PaymentDetailsDefaultArgs,
  > = $Result.GetResult<Prisma.$PaymentDetailsPayload, S>;

  type PaymentDetailsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<PaymentDetailsFindManyArgs, "select" | "include" | "distinct"> & {
    select?: PaymentDetailsCountAggregateInputType | true;
  };

  export interface PaymentDetailsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["PaymentDetails"];
      meta: { name: "PaymentDetails" };
    };
    /**
     * Find zero or one PaymentDetails that matches the filter.
     * @param {PaymentDetailsFindUniqueArgs} args - Arguments to find a PaymentDetails
     * @example
     * // Get one PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentDetailsFindUniqueArgs>(
      args: SelectSubset<T, PaymentDetailsFindUniqueArgs<ExtArgs>>,
    ): Prisma__PaymentDetailsClient<
      $Result.GetResult<
        Prisma.$PaymentDetailsPayload<ExtArgs>,
        T,
        "findUnique"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one PaymentDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentDetailsFindUniqueOrThrowArgs} args - Arguments to find a PaymentDetails
     * @example
     * // Get one PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentDetailsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PaymentDetailsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PaymentDetailsClient<
      $Result.GetResult<
        Prisma.$PaymentDetailsPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first PaymentDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsFindFirstArgs} args - Arguments to find a PaymentDetails
     * @example
     * // Get one PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentDetailsFindFirstArgs>(
      args?: SelectSubset<T, PaymentDetailsFindFirstArgs<ExtArgs>>,
    ): Prisma__PaymentDetailsClient<
      $Result.GetResult<
        Prisma.$PaymentDetailsPayload<ExtArgs>,
        T,
        "findFirst"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first PaymentDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsFindFirstOrThrowArgs} args - Arguments to find a PaymentDetails
     * @example
     * // Get one PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentDetailsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PaymentDetailsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PaymentDetailsClient<
      $Result.GetResult<
        Prisma.$PaymentDetailsPayload<ExtArgs>,
        T,
        "findFirstOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more PaymentDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findMany()
     *
     * // Get first 10 PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const paymentDetailsWithIdOnly = await prisma.paymentDetails.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PaymentDetailsFindManyArgs>(
      args?: SelectSubset<T, PaymentDetailsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a PaymentDetails.
     * @param {PaymentDetailsCreateArgs} args - Arguments to create a PaymentDetails.
     * @example
     * // Create one PaymentDetails
     * const PaymentDetails = await prisma.paymentDetails.create({
     *   data: {
     *     // ... data to create a PaymentDetails
     *   }
     * })
     *
     */
    create<T extends PaymentDetailsCreateArgs>(
      args: SelectSubset<T, PaymentDetailsCreateArgs<ExtArgs>>,
    ): Prisma__PaymentDetailsClient<
      $Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many PaymentDetails.
     * @param {PaymentDetailsCreateManyArgs} args - Arguments to create many PaymentDetails.
     * @example
     * // Create many PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PaymentDetailsCreateManyArgs>(
      args?: SelectSubset<T, PaymentDetailsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a PaymentDetails.
     * @param {PaymentDetailsDeleteArgs} args - Arguments to delete one PaymentDetails.
     * @example
     * // Delete one PaymentDetails
     * const PaymentDetails = await prisma.paymentDetails.delete({
     *   where: {
     *     // ... filter to delete one PaymentDetails
     *   }
     * })
     *
     */
    delete<T extends PaymentDetailsDeleteArgs>(
      args: SelectSubset<T, PaymentDetailsDeleteArgs<ExtArgs>>,
    ): Prisma__PaymentDetailsClient<
      $Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one PaymentDetails.
     * @param {PaymentDetailsUpdateArgs} args - Arguments to update one PaymentDetails.
     * @example
     * // Update one PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PaymentDetailsUpdateArgs>(
      args: SelectSubset<T, PaymentDetailsUpdateArgs<ExtArgs>>,
    ): Prisma__PaymentDetailsClient<
      $Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more PaymentDetails.
     * @param {PaymentDetailsDeleteManyArgs} args - Arguments to filter PaymentDetails to delete.
     * @example
     * // Delete a few PaymentDetails
     * const { count } = await prisma.paymentDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PaymentDetailsDeleteManyArgs>(
      args?: SelectSubset<T, PaymentDetailsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PaymentDetailsUpdateManyArgs>(
      args: SelectSubset<T, PaymentDetailsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one PaymentDetails.
     * @param {PaymentDetailsUpsertArgs} args - Arguments to update or create a PaymentDetails.
     * @example
     * // Update or create a PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.upsert({
     *   create: {
     *     // ... data to create a PaymentDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentDetails we want to update
     *   }
     * })
     */
    upsert<T extends PaymentDetailsUpsertArgs>(
      args: SelectSubset<T, PaymentDetailsUpsertArgs<ExtArgs>>,
    ): Prisma__PaymentDetailsClient<
      $Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsCountArgs} args - Arguments to filter PaymentDetails to count.
     * @example
     * // Count the number of PaymentDetails
     * const count = await prisma.paymentDetails.count({
     *   where: {
     *     // ... the filter for the PaymentDetails we want to count
     *   }
     * })
     **/
    count<T extends PaymentDetailsCountArgs>(
      args?: Subset<T, PaymentDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], PaymentDetailsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentDetailsAggregateArgs>(
      args: Subset<T, PaymentDetailsAggregateArgs>,
    ): Prisma.PrismaPromise<GetPaymentDetailsAggregateType<T>>;

    /**
     * Group by PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsGroupByArgs} args - Group by arguments.
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
      T extends PaymentDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentDetailsGroupByArgs["orderBy"] }
        : { orderBy?: PaymentDetailsGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PaymentDetailsGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetPaymentDetailsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PaymentDetails model
     */
    readonly fields: PaymentDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentDetailsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the PaymentDetails model
   */
  interface PaymentDetailsFieldRefs {
    readonly id: FieldRef<"PaymentDetails", "String">;
    readonly email: FieldRef<"PaymentDetails", "String">;
    readonly amountMoney: FieldRef<"PaymentDetails", "Float">;
    readonly paymentMethod: FieldRef<"PaymentDetails", "PaymentMethod">;
    readonly paymentDate: FieldRef<"PaymentDetails", "DateTime">;
    readonly reference: FieldRef<"PaymentDetails", "String">;
    readonly paymentStatus: FieldRef<"PaymentDetails", "PaymentStatus">;
    readonly createdAt: FieldRef<"PaymentDetails", "DateTime">;
  }

  // Custom InputTypes
  /**
   * PaymentDetails findUnique
   */
  export type PaymentDetailsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null;
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where: PaymentDetailsWhereUniqueInput;
  };

  /**
   * PaymentDetails findUniqueOrThrow
   */
  export type PaymentDetailsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null;
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where: PaymentDetailsWhereUniqueInput;
  };

  /**
   * PaymentDetails findFirst
   */
  export type PaymentDetailsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null;
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where?: PaymentDetailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?:
      | PaymentDetailsOrderByWithRelationInput
      | PaymentDetailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PaymentDetails.
     */
    cursor?: PaymentDetailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PaymentDetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PaymentDetails.
     */
    distinct?: PaymentDetailsScalarFieldEnum | PaymentDetailsScalarFieldEnum[];
  };

  /**
   * PaymentDetails findFirstOrThrow
   */
  export type PaymentDetailsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null;
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where?: PaymentDetailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?:
      | PaymentDetailsOrderByWithRelationInput
      | PaymentDetailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PaymentDetails.
     */
    cursor?: PaymentDetailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PaymentDetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PaymentDetails.
     */
    distinct?: PaymentDetailsScalarFieldEnum | PaymentDetailsScalarFieldEnum[];
  };

  /**
   * PaymentDetails findMany
   */
  export type PaymentDetailsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null;
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where?: PaymentDetailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?:
      | PaymentDetailsOrderByWithRelationInput
      | PaymentDetailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PaymentDetails.
     */
    cursor?: PaymentDetailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PaymentDetails.
     */
    skip?: number;
    distinct?: PaymentDetailsScalarFieldEnum | PaymentDetailsScalarFieldEnum[];
  };

  /**
   * PaymentDetails create
   */
  export type PaymentDetailsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null;
    /**
     * The data needed to create a PaymentDetails.
     */
    data: XOR<PaymentDetailsCreateInput, PaymentDetailsUncheckedCreateInput>;
  };

  /**
   * PaymentDetails createMany
   */
  export type PaymentDetailsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many PaymentDetails.
     */
    data: PaymentDetailsCreateManyInput | PaymentDetailsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * PaymentDetails update
   */
  export type PaymentDetailsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null;
    /**
     * The data needed to update a PaymentDetails.
     */
    data: XOR<PaymentDetailsUpdateInput, PaymentDetailsUncheckedUpdateInput>;
    /**
     * Choose, which PaymentDetails to update.
     */
    where: PaymentDetailsWhereUniqueInput;
  };

  /**
   * PaymentDetails updateMany
   */
  export type PaymentDetailsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update PaymentDetails.
     */
    data: XOR<
      PaymentDetailsUpdateManyMutationInput,
      PaymentDetailsUncheckedUpdateManyInput
    >;
    /**
     * Filter which PaymentDetails to update
     */
    where?: PaymentDetailsWhereInput;
  };

  /**
   * PaymentDetails upsert
   */
  export type PaymentDetailsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null;
    /**
     * The filter to search for the PaymentDetails to update in case it exists.
     */
    where: PaymentDetailsWhereUniqueInput;
    /**
     * In case the PaymentDetails found by the `where` argument doesn't exist, create a new PaymentDetails with this data.
     */
    create: XOR<PaymentDetailsCreateInput, PaymentDetailsUncheckedCreateInput>;
    /**
     * In case the PaymentDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentDetailsUpdateInput, PaymentDetailsUncheckedUpdateInput>;
  };

  /**
   * PaymentDetails delete
   */
  export type PaymentDetailsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null;
    /**
     * Filter which PaymentDetails to delete.
     */
    where: PaymentDetailsWhereUniqueInput;
  };

  /**
   * PaymentDetails deleteMany
   */
  export type PaymentDetailsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PaymentDetails to delete
     */
    where?: PaymentDetailsWhereInput;
  };

  /**
   * PaymentDetails without action
   */
  export type PaymentDetailsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const PaymentDetailsScalarFieldEnum: {
    id: "id";
    email: "email";
    amountMoney: "amountMoney";
    paymentMethod: "paymentMethod";
    paymentDate: "paymentDate";
    reference: "reference";
    paymentStatus: "paymentStatus";
    createdAt: "createdAt";
  };

  export type PaymentDetailsScalarFieldEnum =
    (typeof PaymentDetailsScalarFieldEnum)[keyof typeof PaymentDetailsScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "PaymentMethod"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "PaymentStatus"
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Deep Input Types
   */

  export type PaymentDetailsWhereInput = {
    AND?: PaymentDetailsWhereInput | PaymentDetailsWhereInput[];
    OR?: PaymentDetailsWhereInput[];
    NOT?: PaymentDetailsWhereInput | PaymentDetailsWhereInput[];
    id?: StringFilter<"PaymentDetails"> | string;
    email?: StringFilter<"PaymentDetails"> | string;
    amountMoney?: FloatFilter<"PaymentDetails"> | number;
    paymentMethod?:
      | EnumPaymentMethodFilter<"PaymentDetails">
      | $Enums.PaymentMethod;
    paymentDate?: DateTimeFilter<"PaymentDetails"> | Date | string;
    reference?: StringFilter<"PaymentDetails"> | string;
    paymentStatus?:
      | EnumPaymentStatusFilter<"PaymentDetails">
      | $Enums.PaymentStatus;
    createdAt?: DateTimeFilter<"PaymentDetails"> | Date | string;
  };

  export type PaymentDetailsOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    amountMoney?: SortOrder;
    paymentMethod?: SortOrder;
    paymentDate?: SortOrder;
    reference?: SortOrder;
    paymentStatus?: SortOrder;
    createdAt?: SortOrder;
  };

  export type PaymentDetailsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      reference?: string;
      AND?: PaymentDetailsWhereInput | PaymentDetailsWhereInput[];
      OR?: PaymentDetailsWhereInput[];
      NOT?: PaymentDetailsWhereInput | PaymentDetailsWhereInput[];
      email?: StringFilter<"PaymentDetails"> | string;
      amountMoney?: FloatFilter<"PaymentDetails"> | number;
      paymentMethod?:
        | EnumPaymentMethodFilter<"PaymentDetails">
        | $Enums.PaymentMethod;
      paymentDate?: DateTimeFilter<"PaymentDetails"> | Date | string;
      paymentStatus?:
        | EnumPaymentStatusFilter<"PaymentDetails">
        | $Enums.PaymentStatus;
      createdAt?: DateTimeFilter<"PaymentDetails"> | Date | string;
    },
    "id" | "reference"
  >;

  export type PaymentDetailsOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    amountMoney?: SortOrder;
    paymentMethod?: SortOrder;
    paymentDate?: SortOrder;
    reference?: SortOrder;
    paymentStatus?: SortOrder;
    createdAt?: SortOrder;
    _count?: PaymentDetailsCountOrderByAggregateInput;
    _avg?: PaymentDetailsAvgOrderByAggregateInput;
    _max?: PaymentDetailsMaxOrderByAggregateInput;
    _min?: PaymentDetailsMinOrderByAggregateInput;
    _sum?: PaymentDetailsSumOrderByAggregateInput;
  };

  export type PaymentDetailsScalarWhereWithAggregatesInput = {
    AND?:
      | PaymentDetailsScalarWhereWithAggregatesInput
      | PaymentDetailsScalarWhereWithAggregatesInput[];
    OR?: PaymentDetailsScalarWhereWithAggregatesInput[];
    NOT?:
      | PaymentDetailsScalarWhereWithAggregatesInput
      | PaymentDetailsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"PaymentDetails"> | string;
    email?: StringWithAggregatesFilter<"PaymentDetails"> | string;
    amountMoney?: FloatWithAggregatesFilter<"PaymentDetails"> | number;
    paymentMethod?:
      | EnumPaymentMethodWithAggregatesFilter<"PaymentDetails">
      | $Enums.PaymentMethod;
    paymentDate?:
      | DateTimeWithAggregatesFilter<"PaymentDetails">
      | Date
      | string;
    reference?: StringWithAggregatesFilter<"PaymentDetails"> | string;
    paymentStatus?:
      | EnumPaymentStatusWithAggregatesFilter<"PaymentDetails">
      | $Enums.PaymentStatus;
    createdAt?: DateTimeWithAggregatesFilter<"PaymentDetails"> | Date | string;
  };

  export type PaymentDetailsCreateInput = {
    id?: string;
    email: string;
    amountMoney: number;
    paymentMethod: $Enums.PaymentMethod;
    paymentDate: Date | string;
    reference: string;
    paymentStatus: $Enums.PaymentStatus;
    createdAt?: Date | string;
  };

  export type PaymentDetailsUncheckedCreateInput = {
    id?: string;
    email: string;
    amountMoney: number;
    paymentMethod: $Enums.PaymentMethod;
    paymentDate: Date | string;
    reference: string;
    paymentStatus: $Enums.PaymentStatus;
    createdAt?: Date | string;
  };

  export type PaymentDetailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    amountMoney?: FloatFieldUpdateOperationsInput | number;
    paymentMethod?:
      | EnumPaymentMethodFieldUpdateOperationsInput
      | $Enums.PaymentMethod;
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    reference?: StringFieldUpdateOperationsInput | string;
    paymentStatus?:
      | EnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentDetailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    amountMoney?: FloatFieldUpdateOperationsInput | number;
    paymentMethod?:
      | EnumPaymentMethodFieldUpdateOperationsInput
      | $Enums.PaymentMethod;
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    reference?: StringFieldUpdateOperationsInput | string;
    paymentStatus?:
      | EnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentDetailsCreateManyInput = {
    id?: string;
    email: string;
    amountMoney: number;
    paymentMethod: $Enums.PaymentMethod;
    paymentDate: Date | string;
    reference: string;
    paymentStatus: $Enums.PaymentStatus;
    createdAt?: Date | string;
  };

  export type PaymentDetailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    amountMoney?: FloatFieldUpdateOperationsInput | number;
    paymentMethod?:
      | EnumPaymentMethodFieldUpdateOperationsInput
      | $Enums.PaymentMethod;
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    reference?: StringFieldUpdateOperationsInput | string;
    paymentStatus?:
      | EnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentDetailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    amountMoney?: FloatFieldUpdateOperationsInput | number;
    paymentMethod?:
      | EnumPaymentMethodFieldUpdateOperationsInput
      | $Enums.PaymentMethod;
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    reference?: StringFieldUpdateOperationsInput | string;
    paymentStatus?:
      | EnumPaymentStatusFieldUpdateOperationsInput
      | $Enums.PaymentStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.PaymentMethod
      | EnumPaymentMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethod[];
    notIn?: $Enums.PaymentMethod[];
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.PaymentStatus
      | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[];
    notIn?: $Enums.PaymentStatus[];
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
  };

  export type PaymentDetailsCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    amountMoney?: SortOrder;
    paymentMethod?: SortOrder;
    paymentDate?: SortOrder;
    reference?: SortOrder;
    paymentStatus?: SortOrder;
    createdAt?: SortOrder;
  };

  export type PaymentDetailsAvgOrderByAggregateInput = {
    amountMoney?: SortOrder;
  };

  export type PaymentDetailsMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    amountMoney?: SortOrder;
    paymentMethod?: SortOrder;
    paymentDate?: SortOrder;
    reference?: SortOrder;
    paymentStatus?: SortOrder;
    createdAt?: SortOrder;
  };

  export type PaymentDetailsMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    amountMoney?: SortOrder;
    paymentMethod?: SortOrder;
    paymentDate?: SortOrder;
    reference?: SortOrder;
    paymentStatus?: SortOrder;
    createdAt?: SortOrder;
  };

  export type PaymentDetailsSumOrderByAggregateInput = {
    amountMoney?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.PaymentMethod
      | EnumPaymentMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethod[];
    notIn?: $Enums.PaymentMethod[];
    not?:
      | NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel>
      | $Enums.PaymentMethod;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>;
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.PaymentStatus
      | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[];
    notIn?: $Enums.PaymentStatus[];
    not?:
      | NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.PaymentStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.PaymentMethod
      | EnumPaymentMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethod[];
    notIn?: $Enums.PaymentMethod[];
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.PaymentStatus
      | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[];
    notIn?: $Enums.PaymentStatus[];
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedEnumPaymentMethodWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.PaymentMethod
      | EnumPaymentMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentMethod[];
    notIn?: $Enums.PaymentMethod[];
    not?:
      | NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel>
      | $Enums.PaymentMethod;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>;
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedEnumPaymentStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.PaymentStatus
      | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PaymentStatus[];
    notIn?: $Enums.PaymentStatus[];
    not?:
      | NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.PaymentStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use PaymentDetailsDefaultArgs instead
   */
  export type PaymentDetailsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = PaymentDetailsDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
