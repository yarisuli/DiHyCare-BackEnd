
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Disease
 * 
 */
export type Disease = $Result.DefaultSelection<Prisma.$DiseasePayload>
/**
 * Model UserDisease
 * 
 */
export type UserDisease = $Result.DefaultSelection<Prisma.$UserDiseasePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Sex: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Sex = (typeof Sex)[keyof typeof Sex]

}

export type Sex = $Enums.Sex

export const Sex: typeof $Enums.Sex

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disease`: Exposes CRUD operations for the **Disease** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diseases
    * const diseases = await prisma.disease.findMany()
    * ```
    */
  get disease(): Prisma.DiseaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userDisease`: Exposes CRUD operations for the **UserDisease** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDiseases
    * const userDiseases = await prisma.userDisease.findMany()
    * ```
    */
  get userDisease(): Prisma.UserDiseaseDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Disease: 'Disease',
    UserDisease: 'UserDisease'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "disease" | "userDisease"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Disease: {
        payload: Prisma.$DiseasePayload<ExtArgs>
        fields: Prisma.DiseaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiseaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiseaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          findFirst: {
            args: Prisma.DiseaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiseaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          findMany: {
            args: Prisma.DiseaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>[]
          }
          create: {
            args: Prisma.DiseaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          createMany: {
            args: Prisma.DiseaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiseaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>[]
          }
          delete: {
            args: Prisma.DiseaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          update: {
            args: Prisma.DiseaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          deleteMany: {
            args: Prisma.DiseaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiseaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiseaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>[]
          }
          upsert: {
            args: Prisma.DiseaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          aggregate: {
            args: Prisma.DiseaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisease>
          }
          groupBy: {
            args: Prisma.DiseaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiseaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiseaseCountArgs<ExtArgs>
            result: $Utils.Optional<DiseaseCountAggregateOutputType> | number
          }
        }
      }
      UserDisease: {
        payload: Prisma.$UserDiseasePayload<ExtArgs>
        fields: Prisma.UserDiseaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDiseaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDiseaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload>
          }
          findFirst: {
            args: Prisma.UserDiseaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDiseaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload>
          }
          findMany: {
            args: Prisma.UserDiseaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload>[]
          }
          create: {
            args: Prisma.UserDiseaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload>
          }
          createMany: {
            args: Prisma.UserDiseaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDiseaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload>[]
          }
          delete: {
            args: Prisma.UserDiseaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload>
          }
          update: {
            args: Prisma.UserDiseaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload>
          }
          deleteMany: {
            args: Prisma.UserDiseaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDiseaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDiseaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload>[]
          }
          upsert: {
            args: Prisma.UserDiseaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload>
          }
          aggregate: {
            args: Prisma.UserDiseaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDisease>
          }
          groupBy: {
            args: Prisma.UserDiseaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDiseaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDiseaseCountArgs<ExtArgs>
            result: $Utils.Optional<UserDiseaseCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    disease?: DiseaseOmit
    userDisease?: UserDiseaseOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    UserDisease: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserDisease?: boolean | UserCountOutputTypeCountUserDiseaseArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserDiseaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDiseaseWhereInput
  }


  /**
   * Count Type DiseaseCountOutputType
   */

  export type DiseaseCountOutputType = {
    UserDisease: number
  }

  export type DiseaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserDisease?: boolean | DiseaseCountOutputTypeCountUserDiseaseArgs
  }

  // Custom InputTypes
  /**
   * DiseaseCountOutputType without action
   */
  export type DiseaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseCountOutputType
     */
    select?: DiseaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiseaseCountOutputType without action
   */
  export type DiseaseCountOutputTypeCountUserDiseaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDiseaseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    age: number | null
    weight: number | null
    height: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    age: number | null
    weight: number | null
    height: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    surname: string | null
    age: number | null
    sex: $Enums.Sex | null
    weight: number | null
    height: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    surname: string | null
    age: number | null
    sex: $Enums.Sex | null
    weight: number | null
    height: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    surname: number
    age: number
    sex: number
    weight: number
    height: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    age?: true
    weight?: true
    height?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    age?: true
    weight?: true
    height?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    surname?: true
    age?: true
    sex?: true
    weight?: true
    height?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    surname?: true
    age?: true
    sex?: true
    weight?: true
    height?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    surname?: true
    age?: true
    sex?: true
    weight?: true
    height?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    surname: string
    age: number
    sex: $Enums.Sex
    weight: number
    height: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    surname?: boolean
    age?: boolean
    sex?: boolean
    weight?: boolean
    height?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    UserDisease?: boolean | User$UserDiseaseArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    surname?: boolean
    age?: boolean
    sex?: boolean
    weight?: boolean
    height?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    surname?: boolean
    age?: boolean
    sex?: boolean
    weight?: boolean
    height?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    surname?: boolean
    age?: boolean
    sex?: boolean
    weight?: boolean
    height?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "surname" | "age" | "sex" | "weight" | "height" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserDisease?: boolean | User$UserDiseaseArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      UserDisease: Prisma.$UserDiseasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      surname: string
      age: number
      sex: $Enums.Sex
      weight: number
      height: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserDisease<T extends User$UserDiseaseArgs<ExtArgs> = {}>(args?: Subset<T, User$UserDiseaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly surname: FieldRef<"User", 'String'>
    readonly age: FieldRef<"User", 'Int'>
    readonly sex: FieldRef<"User", 'Sex'>
    readonly weight: FieldRef<"User", 'Int'>
    readonly height: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.UserDisease
   */
  export type User$UserDiseaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    where?: UserDiseaseWhereInput
    orderBy?: UserDiseaseOrderByWithRelationInput | UserDiseaseOrderByWithRelationInput[]
    cursor?: UserDiseaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDiseaseScalarFieldEnum | UserDiseaseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Disease
   */

  export type AggregateDisease = {
    _count: DiseaseCountAggregateOutputType | null
    _avg: DiseaseAvgAggregateOutputType | null
    _sum: DiseaseSumAggregateOutputType | null
    _min: DiseaseMinAggregateOutputType | null
    _max: DiseaseMaxAggregateOutputType | null
  }

  export type DiseaseAvgAggregateOutputType = {
    id: number | null
  }

  export type DiseaseSumAggregateOutputType = {
    id: number | null
  }

  export type DiseaseMinAggregateOutputType = {
    id: number | null
    disease: string | null
    typeDisease: string | null
  }

  export type DiseaseMaxAggregateOutputType = {
    id: number | null
    disease: string | null
    typeDisease: string | null
  }

  export type DiseaseCountAggregateOutputType = {
    id: number
    disease: number
    typeDisease: number
    _all: number
  }


  export type DiseaseAvgAggregateInputType = {
    id?: true
  }

  export type DiseaseSumAggregateInputType = {
    id?: true
  }

  export type DiseaseMinAggregateInputType = {
    id?: true
    disease?: true
    typeDisease?: true
  }

  export type DiseaseMaxAggregateInputType = {
    id?: true
    disease?: true
    typeDisease?: true
  }

  export type DiseaseCountAggregateInputType = {
    id?: true
    disease?: true
    typeDisease?: true
    _all?: true
  }

  export type DiseaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disease to aggregate.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diseases
    **/
    _count?: true | DiseaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiseaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiseaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiseaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiseaseMaxAggregateInputType
  }

  export type GetDiseaseAggregateType<T extends DiseaseAggregateArgs> = {
        [P in keyof T & keyof AggregateDisease]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisease[P]>
      : GetScalarType<T[P], AggregateDisease[P]>
  }




  export type DiseaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiseaseWhereInput
    orderBy?: DiseaseOrderByWithAggregationInput | DiseaseOrderByWithAggregationInput[]
    by: DiseaseScalarFieldEnum[] | DiseaseScalarFieldEnum
    having?: DiseaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiseaseCountAggregateInputType | true
    _avg?: DiseaseAvgAggregateInputType
    _sum?: DiseaseSumAggregateInputType
    _min?: DiseaseMinAggregateInputType
    _max?: DiseaseMaxAggregateInputType
  }

  export type DiseaseGroupByOutputType = {
    id: number
    disease: string
    typeDisease: string
    _count: DiseaseCountAggregateOutputType | null
    _avg: DiseaseAvgAggregateOutputType | null
    _sum: DiseaseSumAggregateOutputType | null
    _min: DiseaseMinAggregateOutputType | null
    _max: DiseaseMaxAggregateOutputType | null
  }

  type GetDiseaseGroupByPayload<T extends DiseaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiseaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiseaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiseaseGroupByOutputType[P]>
            : GetScalarType<T[P], DiseaseGroupByOutputType[P]>
        }
      >
    >


  export type DiseaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    disease?: boolean
    typeDisease?: boolean
    UserDisease?: boolean | Disease$UserDiseaseArgs<ExtArgs>
    _count?: boolean | DiseaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disease"]>

  export type DiseaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    disease?: boolean
    typeDisease?: boolean
  }, ExtArgs["result"]["disease"]>

  export type DiseaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    disease?: boolean
    typeDisease?: boolean
  }, ExtArgs["result"]["disease"]>

  export type DiseaseSelectScalar = {
    id?: boolean
    disease?: boolean
    typeDisease?: boolean
  }

  export type DiseaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "disease" | "typeDisease", ExtArgs["result"]["disease"]>
  export type DiseaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserDisease?: boolean | Disease$UserDiseaseArgs<ExtArgs>
    _count?: boolean | DiseaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiseaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DiseaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DiseasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disease"
    objects: {
      UserDisease: Prisma.$UserDiseasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      disease: string
      typeDisease: string
    }, ExtArgs["result"]["disease"]>
    composites: {}
  }

  type DiseaseGetPayload<S extends boolean | null | undefined | DiseaseDefaultArgs> = $Result.GetResult<Prisma.$DiseasePayload, S>

  type DiseaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiseaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiseaseCountAggregateInputType | true
    }

  export interface DiseaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disease'], meta: { name: 'Disease' } }
    /**
     * Find zero or one Disease that matches the filter.
     * @param {DiseaseFindUniqueArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiseaseFindUniqueArgs>(args: SelectSubset<T, DiseaseFindUniqueArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disease that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiseaseFindUniqueOrThrowArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiseaseFindUniqueOrThrowArgs>(args: SelectSubset<T, DiseaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disease that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseFindFirstArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiseaseFindFirstArgs>(args?: SelectSubset<T, DiseaseFindFirstArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disease that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseFindFirstOrThrowArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiseaseFindFirstOrThrowArgs>(args?: SelectSubset<T, DiseaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diseases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diseases
     * const diseases = await prisma.disease.findMany()
     * 
     * // Get first 10 Diseases
     * const diseases = await prisma.disease.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diseaseWithIdOnly = await prisma.disease.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiseaseFindManyArgs>(args?: SelectSubset<T, DiseaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disease.
     * @param {DiseaseCreateArgs} args - Arguments to create a Disease.
     * @example
     * // Create one Disease
     * const Disease = await prisma.disease.create({
     *   data: {
     *     // ... data to create a Disease
     *   }
     * })
     * 
     */
    create<T extends DiseaseCreateArgs>(args: SelectSubset<T, DiseaseCreateArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diseases.
     * @param {DiseaseCreateManyArgs} args - Arguments to create many Diseases.
     * @example
     * // Create many Diseases
     * const disease = await prisma.disease.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiseaseCreateManyArgs>(args?: SelectSubset<T, DiseaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diseases and returns the data saved in the database.
     * @param {DiseaseCreateManyAndReturnArgs} args - Arguments to create many Diseases.
     * @example
     * // Create many Diseases
     * const disease = await prisma.disease.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diseases and only return the `id`
     * const diseaseWithIdOnly = await prisma.disease.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiseaseCreateManyAndReturnArgs>(args?: SelectSubset<T, DiseaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Disease.
     * @param {DiseaseDeleteArgs} args - Arguments to delete one Disease.
     * @example
     * // Delete one Disease
     * const Disease = await prisma.disease.delete({
     *   where: {
     *     // ... filter to delete one Disease
     *   }
     * })
     * 
     */
    delete<T extends DiseaseDeleteArgs>(args: SelectSubset<T, DiseaseDeleteArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disease.
     * @param {DiseaseUpdateArgs} args - Arguments to update one Disease.
     * @example
     * // Update one Disease
     * const disease = await prisma.disease.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiseaseUpdateArgs>(args: SelectSubset<T, DiseaseUpdateArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diseases.
     * @param {DiseaseDeleteManyArgs} args - Arguments to filter Diseases to delete.
     * @example
     * // Delete a few Diseases
     * const { count } = await prisma.disease.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiseaseDeleteManyArgs>(args?: SelectSubset<T, DiseaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diseases
     * const disease = await prisma.disease.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiseaseUpdateManyArgs>(args: SelectSubset<T, DiseaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diseases and returns the data updated in the database.
     * @param {DiseaseUpdateManyAndReturnArgs} args - Arguments to update many Diseases.
     * @example
     * // Update many Diseases
     * const disease = await prisma.disease.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diseases and only return the `id`
     * const diseaseWithIdOnly = await prisma.disease.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiseaseUpdateManyAndReturnArgs>(args: SelectSubset<T, DiseaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Disease.
     * @param {DiseaseUpsertArgs} args - Arguments to update or create a Disease.
     * @example
     * // Update or create a Disease
     * const disease = await prisma.disease.upsert({
     *   create: {
     *     // ... data to create a Disease
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disease we want to update
     *   }
     * })
     */
    upsert<T extends DiseaseUpsertArgs>(args: SelectSubset<T, DiseaseUpsertArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseCountArgs} args - Arguments to filter Diseases to count.
     * @example
     * // Count the number of Diseases
     * const count = await prisma.disease.count({
     *   where: {
     *     // ... the filter for the Diseases we want to count
     *   }
     * })
    **/
    count<T extends DiseaseCountArgs>(
      args?: Subset<T, DiseaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiseaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiseaseAggregateArgs>(args: Subset<T, DiseaseAggregateArgs>): Prisma.PrismaPromise<GetDiseaseAggregateType<T>>

    /**
     * Group by Disease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseGroupByArgs} args - Group by arguments.
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
      T extends DiseaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiseaseGroupByArgs['orderBy'] }
        : { orderBy?: DiseaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiseaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiseaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disease model
   */
  readonly fields: DiseaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disease.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiseaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserDisease<T extends Disease$UserDiseaseArgs<ExtArgs> = {}>(args?: Subset<T, Disease$UserDiseaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Disease model
   */
  interface DiseaseFieldRefs {
    readonly id: FieldRef<"Disease", 'Int'>
    readonly disease: FieldRef<"Disease", 'String'>
    readonly typeDisease: FieldRef<"Disease", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Disease findUnique
   */
  export type DiseaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease findUniqueOrThrow
   */
  export type DiseaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease findFirst
   */
  export type DiseaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diseases.
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diseases.
     */
    distinct?: DiseaseScalarFieldEnum | DiseaseScalarFieldEnum[]
  }

  /**
   * Disease findFirstOrThrow
   */
  export type DiseaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diseases.
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diseases.
     */
    distinct?: DiseaseScalarFieldEnum | DiseaseScalarFieldEnum[]
  }

  /**
   * Disease findMany
   */
  export type DiseaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Diseases to fetch.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diseases.
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    distinct?: DiseaseScalarFieldEnum | DiseaseScalarFieldEnum[]
  }

  /**
   * Disease create
   */
  export type DiseaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Disease.
     */
    data: XOR<DiseaseCreateInput, DiseaseUncheckedCreateInput>
  }

  /**
   * Disease createMany
   */
  export type DiseaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diseases.
     */
    data: DiseaseCreateManyInput | DiseaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disease createManyAndReturn
   */
  export type DiseaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * The data used to create many Diseases.
     */
    data: DiseaseCreateManyInput | DiseaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disease update
   */
  export type DiseaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Disease.
     */
    data: XOR<DiseaseUpdateInput, DiseaseUncheckedUpdateInput>
    /**
     * Choose, which Disease to update.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease updateMany
   */
  export type DiseaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diseases.
     */
    data: XOR<DiseaseUpdateManyMutationInput, DiseaseUncheckedUpdateManyInput>
    /**
     * Filter which Diseases to update
     */
    where?: DiseaseWhereInput
    /**
     * Limit how many Diseases to update.
     */
    limit?: number
  }

  /**
   * Disease updateManyAndReturn
   */
  export type DiseaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * The data used to update Diseases.
     */
    data: XOR<DiseaseUpdateManyMutationInput, DiseaseUncheckedUpdateManyInput>
    /**
     * Filter which Diseases to update
     */
    where?: DiseaseWhereInput
    /**
     * Limit how many Diseases to update.
     */
    limit?: number
  }

  /**
   * Disease upsert
   */
  export type DiseaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Disease to update in case it exists.
     */
    where: DiseaseWhereUniqueInput
    /**
     * In case the Disease found by the `where` argument doesn't exist, create a new Disease with this data.
     */
    create: XOR<DiseaseCreateInput, DiseaseUncheckedCreateInput>
    /**
     * In case the Disease was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiseaseUpdateInput, DiseaseUncheckedUpdateInput>
  }

  /**
   * Disease delete
   */
  export type DiseaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter which Disease to delete.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease deleteMany
   */
  export type DiseaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diseases to delete
     */
    where?: DiseaseWhereInput
    /**
     * Limit how many Diseases to delete.
     */
    limit?: number
  }

  /**
   * Disease.UserDisease
   */
  export type Disease$UserDiseaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    where?: UserDiseaseWhereInput
    orderBy?: UserDiseaseOrderByWithRelationInput | UserDiseaseOrderByWithRelationInput[]
    cursor?: UserDiseaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDiseaseScalarFieldEnum | UserDiseaseScalarFieldEnum[]
  }

  /**
   * Disease without action
   */
  export type DiseaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
  }


  /**
   * Model UserDisease
   */

  export type AggregateUserDisease = {
    _count: UserDiseaseCountAggregateOutputType | null
    _avg: UserDiseaseAvgAggregateOutputType | null
    _sum: UserDiseaseSumAggregateOutputType | null
    _min: UserDiseaseMinAggregateOutputType | null
    _max: UserDiseaseMaxAggregateOutputType | null
  }

  export type UserDiseaseAvgAggregateOutputType = {
    userId: number | null
    diseaseId: number | null
  }

  export type UserDiseaseSumAggregateOutputType = {
    userId: number | null
    diseaseId: number | null
  }

  export type UserDiseaseMinAggregateOutputType = {
    userId: number | null
    diseaseId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserDiseaseMaxAggregateOutputType = {
    userId: number | null
    diseaseId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserDiseaseCountAggregateOutputType = {
    userId: number
    diseaseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserDiseaseAvgAggregateInputType = {
    userId?: true
    diseaseId?: true
  }

  export type UserDiseaseSumAggregateInputType = {
    userId?: true
    diseaseId?: true
  }

  export type UserDiseaseMinAggregateInputType = {
    userId?: true
    diseaseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserDiseaseMaxAggregateInputType = {
    userId?: true
    diseaseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserDiseaseCountAggregateInputType = {
    userId?: true
    diseaseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserDiseaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDisease to aggregate.
     */
    where?: UserDiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDiseases to fetch.
     */
    orderBy?: UserDiseaseOrderByWithRelationInput | UserDiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDiseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDiseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDiseases
    **/
    _count?: true | UserDiseaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserDiseaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserDiseaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDiseaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDiseaseMaxAggregateInputType
  }

  export type GetUserDiseaseAggregateType<T extends UserDiseaseAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDisease]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDisease[P]>
      : GetScalarType<T[P], AggregateUserDisease[P]>
  }




  export type UserDiseaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDiseaseWhereInput
    orderBy?: UserDiseaseOrderByWithAggregationInput | UserDiseaseOrderByWithAggregationInput[]
    by: UserDiseaseScalarFieldEnum[] | UserDiseaseScalarFieldEnum
    having?: UserDiseaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDiseaseCountAggregateInputType | true
    _avg?: UserDiseaseAvgAggregateInputType
    _sum?: UserDiseaseSumAggregateInputType
    _min?: UserDiseaseMinAggregateInputType
    _max?: UserDiseaseMaxAggregateInputType
  }

  export type UserDiseaseGroupByOutputType = {
    userId: number
    diseaseId: number
    createdAt: Date
    updatedAt: Date
    _count: UserDiseaseCountAggregateOutputType | null
    _avg: UserDiseaseAvgAggregateOutputType | null
    _sum: UserDiseaseSumAggregateOutputType | null
    _min: UserDiseaseMinAggregateOutputType | null
    _max: UserDiseaseMaxAggregateOutputType | null
  }

  type GetUserDiseaseGroupByPayload<T extends UserDiseaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDiseaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDiseaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDiseaseGroupByOutputType[P]>
            : GetScalarType<T[P], UserDiseaseGroupByOutputType[P]>
        }
      >
    >


  export type UserDiseaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    diseaseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDisease"]>

  export type UserDiseaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    diseaseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDisease"]>

  export type UserDiseaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    diseaseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDisease"]>

  export type UserDiseaseSelectScalar = {
    userId?: boolean
    diseaseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserDiseaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "diseaseId" | "createdAt" | "updatedAt", ExtArgs["result"]["userDisease"]>
  export type UserDiseaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }
  export type UserDiseaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }
  export type UserDiseaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }

  export type $UserDiseasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDisease"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      disease: Prisma.$DiseasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      diseaseId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userDisease"]>
    composites: {}
  }

  type UserDiseaseGetPayload<S extends boolean | null | undefined | UserDiseaseDefaultArgs> = $Result.GetResult<Prisma.$UserDiseasePayload, S>

  type UserDiseaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDiseaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDiseaseCountAggregateInputType | true
    }

  export interface UserDiseaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDisease'], meta: { name: 'UserDisease' } }
    /**
     * Find zero or one UserDisease that matches the filter.
     * @param {UserDiseaseFindUniqueArgs} args - Arguments to find a UserDisease
     * @example
     * // Get one UserDisease
     * const userDisease = await prisma.userDisease.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDiseaseFindUniqueArgs>(args: SelectSubset<T, UserDiseaseFindUniqueArgs<ExtArgs>>): Prisma__UserDiseaseClient<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserDisease that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDiseaseFindUniqueOrThrowArgs} args - Arguments to find a UserDisease
     * @example
     * // Get one UserDisease
     * const userDisease = await prisma.userDisease.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDiseaseFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDiseaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDiseaseClient<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDisease that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiseaseFindFirstArgs} args - Arguments to find a UserDisease
     * @example
     * // Get one UserDisease
     * const userDisease = await prisma.userDisease.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDiseaseFindFirstArgs>(args?: SelectSubset<T, UserDiseaseFindFirstArgs<ExtArgs>>): Prisma__UserDiseaseClient<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDisease that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiseaseFindFirstOrThrowArgs} args - Arguments to find a UserDisease
     * @example
     * // Get one UserDisease
     * const userDisease = await prisma.userDisease.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDiseaseFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDiseaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDiseaseClient<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserDiseases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiseaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDiseases
     * const userDiseases = await prisma.userDisease.findMany()
     * 
     * // Get first 10 UserDiseases
     * const userDiseases = await prisma.userDisease.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userDiseaseWithUserIdOnly = await prisma.userDisease.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserDiseaseFindManyArgs>(args?: SelectSubset<T, UserDiseaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserDisease.
     * @param {UserDiseaseCreateArgs} args - Arguments to create a UserDisease.
     * @example
     * // Create one UserDisease
     * const UserDisease = await prisma.userDisease.create({
     *   data: {
     *     // ... data to create a UserDisease
     *   }
     * })
     * 
     */
    create<T extends UserDiseaseCreateArgs>(args: SelectSubset<T, UserDiseaseCreateArgs<ExtArgs>>): Prisma__UserDiseaseClient<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserDiseases.
     * @param {UserDiseaseCreateManyArgs} args - Arguments to create many UserDiseases.
     * @example
     * // Create many UserDiseases
     * const userDisease = await prisma.userDisease.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDiseaseCreateManyArgs>(args?: SelectSubset<T, UserDiseaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDiseases and returns the data saved in the database.
     * @param {UserDiseaseCreateManyAndReturnArgs} args - Arguments to create many UserDiseases.
     * @example
     * // Create many UserDiseases
     * const userDisease = await prisma.userDisease.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDiseases and only return the `userId`
     * const userDiseaseWithUserIdOnly = await prisma.userDisease.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDiseaseCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDiseaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserDisease.
     * @param {UserDiseaseDeleteArgs} args - Arguments to delete one UserDisease.
     * @example
     * // Delete one UserDisease
     * const UserDisease = await prisma.userDisease.delete({
     *   where: {
     *     // ... filter to delete one UserDisease
     *   }
     * })
     * 
     */
    delete<T extends UserDiseaseDeleteArgs>(args: SelectSubset<T, UserDiseaseDeleteArgs<ExtArgs>>): Prisma__UserDiseaseClient<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserDisease.
     * @param {UserDiseaseUpdateArgs} args - Arguments to update one UserDisease.
     * @example
     * // Update one UserDisease
     * const userDisease = await prisma.userDisease.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDiseaseUpdateArgs>(args: SelectSubset<T, UserDiseaseUpdateArgs<ExtArgs>>): Prisma__UserDiseaseClient<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserDiseases.
     * @param {UserDiseaseDeleteManyArgs} args - Arguments to filter UserDiseases to delete.
     * @example
     * // Delete a few UserDiseases
     * const { count } = await prisma.userDisease.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDiseaseDeleteManyArgs>(args?: SelectSubset<T, UserDiseaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDiseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiseaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDiseases
     * const userDisease = await prisma.userDisease.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDiseaseUpdateManyArgs>(args: SelectSubset<T, UserDiseaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDiseases and returns the data updated in the database.
     * @param {UserDiseaseUpdateManyAndReturnArgs} args - Arguments to update many UserDiseases.
     * @example
     * // Update many UserDiseases
     * const userDisease = await prisma.userDisease.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserDiseases and only return the `userId`
     * const userDiseaseWithUserIdOnly = await prisma.userDisease.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserDiseaseUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDiseaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserDisease.
     * @param {UserDiseaseUpsertArgs} args - Arguments to update or create a UserDisease.
     * @example
     * // Update or create a UserDisease
     * const userDisease = await prisma.userDisease.upsert({
     *   create: {
     *     // ... data to create a UserDisease
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDisease we want to update
     *   }
     * })
     */
    upsert<T extends UserDiseaseUpsertArgs>(args: SelectSubset<T, UserDiseaseUpsertArgs<ExtArgs>>): Prisma__UserDiseaseClient<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserDiseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiseaseCountArgs} args - Arguments to filter UserDiseases to count.
     * @example
     * // Count the number of UserDiseases
     * const count = await prisma.userDisease.count({
     *   where: {
     *     // ... the filter for the UserDiseases we want to count
     *   }
     * })
    **/
    count<T extends UserDiseaseCountArgs>(
      args?: Subset<T, UserDiseaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDiseaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDisease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiseaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserDiseaseAggregateArgs>(args: Subset<T, UserDiseaseAggregateArgs>): Prisma.PrismaPromise<GetUserDiseaseAggregateType<T>>

    /**
     * Group by UserDisease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiseaseGroupByArgs} args - Group by arguments.
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
      T extends UserDiseaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDiseaseGroupByArgs['orderBy'] }
        : { orderBy?: UserDiseaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserDiseaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDiseaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDisease model
   */
  readonly fields: UserDiseaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDisease.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDiseaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disease<T extends DiseaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiseaseDefaultArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserDisease model
   */
  interface UserDiseaseFieldRefs {
    readonly userId: FieldRef<"UserDisease", 'Int'>
    readonly diseaseId: FieldRef<"UserDisease", 'Int'>
    readonly createdAt: FieldRef<"UserDisease", 'DateTime'>
    readonly updatedAt: FieldRef<"UserDisease", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserDisease findUnique
   */
  export type UserDiseaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    /**
     * Filter, which UserDisease to fetch.
     */
    where: UserDiseaseWhereUniqueInput
  }

  /**
   * UserDisease findUniqueOrThrow
   */
  export type UserDiseaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    /**
     * Filter, which UserDisease to fetch.
     */
    where: UserDiseaseWhereUniqueInput
  }

  /**
   * UserDisease findFirst
   */
  export type UserDiseaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    /**
     * Filter, which UserDisease to fetch.
     */
    where?: UserDiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDiseases to fetch.
     */
    orderBy?: UserDiseaseOrderByWithRelationInput | UserDiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDiseases.
     */
    cursor?: UserDiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDiseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDiseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDiseases.
     */
    distinct?: UserDiseaseScalarFieldEnum | UserDiseaseScalarFieldEnum[]
  }

  /**
   * UserDisease findFirstOrThrow
   */
  export type UserDiseaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    /**
     * Filter, which UserDisease to fetch.
     */
    where?: UserDiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDiseases to fetch.
     */
    orderBy?: UserDiseaseOrderByWithRelationInput | UserDiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDiseases.
     */
    cursor?: UserDiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDiseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDiseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDiseases.
     */
    distinct?: UserDiseaseScalarFieldEnum | UserDiseaseScalarFieldEnum[]
  }

  /**
   * UserDisease findMany
   */
  export type UserDiseaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    /**
     * Filter, which UserDiseases to fetch.
     */
    where?: UserDiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDiseases to fetch.
     */
    orderBy?: UserDiseaseOrderByWithRelationInput | UserDiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDiseases.
     */
    cursor?: UserDiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDiseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDiseases.
     */
    skip?: number
    distinct?: UserDiseaseScalarFieldEnum | UserDiseaseScalarFieldEnum[]
  }

  /**
   * UserDisease create
   */
  export type UserDiseaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDisease.
     */
    data: XOR<UserDiseaseCreateInput, UserDiseaseUncheckedCreateInput>
  }

  /**
   * UserDisease createMany
   */
  export type UserDiseaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDiseases.
     */
    data: UserDiseaseCreateManyInput | UserDiseaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDisease createManyAndReturn
   */
  export type UserDiseaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * The data used to create many UserDiseases.
     */
    data: UserDiseaseCreateManyInput | UserDiseaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDisease update
   */
  export type UserDiseaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDisease.
     */
    data: XOR<UserDiseaseUpdateInput, UserDiseaseUncheckedUpdateInput>
    /**
     * Choose, which UserDisease to update.
     */
    where: UserDiseaseWhereUniqueInput
  }

  /**
   * UserDisease updateMany
   */
  export type UserDiseaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDiseases.
     */
    data: XOR<UserDiseaseUpdateManyMutationInput, UserDiseaseUncheckedUpdateManyInput>
    /**
     * Filter which UserDiseases to update
     */
    where?: UserDiseaseWhereInput
    /**
     * Limit how many UserDiseases to update.
     */
    limit?: number
  }

  /**
   * UserDisease updateManyAndReturn
   */
  export type UserDiseaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * The data used to update UserDiseases.
     */
    data: XOR<UserDiseaseUpdateManyMutationInput, UserDiseaseUncheckedUpdateManyInput>
    /**
     * Filter which UserDiseases to update
     */
    where?: UserDiseaseWhereInput
    /**
     * Limit how many UserDiseases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDisease upsert
   */
  export type UserDiseaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDisease to update in case it exists.
     */
    where: UserDiseaseWhereUniqueInput
    /**
     * In case the UserDisease found by the `where` argument doesn't exist, create a new UserDisease with this data.
     */
    create: XOR<UserDiseaseCreateInput, UserDiseaseUncheckedCreateInput>
    /**
     * In case the UserDisease was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDiseaseUpdateInput, UserDiseaseUncheckedUpdateInput>
  }

  /**
   * UserDisease delete
   */
  export type UserDiseaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    /**
     * Filter which UserDisease to delete.
     */
    where: UserDiseaseWhereUniqueInput
  }

  /**
   * UserDisease deleteMany
   */
  export type UserDiseaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDiseases to delete
     */
    where?: UserDiseaseWhereInput
    /**
     * Limit how many UserDiseases to delete.
     */
    limit?: number
  }

  /**
   * UserDisease without action
   */
  export type UserDiseaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    surname: 'surname',
    age: 'age',
    sex: 'sex',
    weight: 'weight',
    height: 'height',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DiseaseScalarFieldEnum: {
    id: 'id',
    disease: 'disease',
    typeDisease: 'typeDisease'
  };

  export type DiseaseScalarFieldEnum = (typeof DiseaseScalarFieldEnum)[keyof typeof DiseaseScalarFieldEnum]


  export const UserDiseaseScalarFieldEnum: {
    userId: 'userId',
    diseaseId: 'diseaseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserDiseaseScalarFieldEnum = (typeof UserDiseaseScalarFieldEnum)[keyof typeof UserDiseaseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Sex'
   */
  export type EnumSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sex'>
    


  /**
   * Reference to a field of type 'Sex[]'
   */
  export type ListEnumSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sex[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    surname?: StringFilter<"User"> | string
    age?: IntFilter<"User"> | number
    sex?: EnumSexFilter<"User"> | $Enums.Sex
    weight?: IntFilter<"User"> | number
    height?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    UserDisease?: UserDiseaseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UserDisease?: UserDiseaseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    surname?: StringFilter<"User"> | string
    age?: IntFilter<"User"> | number
    sex?: EnumSexFilter<"User"> | $Enums.Sex
    weight?: IntFilter<"User"> | number
    height?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    UserDisease?: UserDiseaseListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    surname?: StringWithAggregatesFilter<"User"> | string
    age?: IntWithAggregatesFilter<"User"> | number
    sex?: EnumSexWithAggregatesFilter<"User"> | $Enums.Sex
    weight?: IntWithAggregatesFilter<"User"> | number
    height?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DiseaseWhereInput = {
    AND?: DiseaseWhereInput | DiseaseWhereInput[]
    OR?: DiseaseWhereInput[]
    NOT?: DiseaseWhereInput | DiseaseWhereInput[]
    id?: IntFilter<"Disease"> | number
    disease?: StringFilter<"Disease"> | string
    typeDisease?: StringFilter<"Disease"> | string
    UserDisease?: UserDiseaseListRelationFilter
  }

  export type DiseaseOrderByWithRelationInput = {
    id?: SortOrder
    disease?: SortOrder
    typeDisease?: SortOrder
    UserDisease?: UserDiseaseOrderByRelationAggregateInput
  }

  export type DiseaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DiseaseWhereInput | DiseaseWhereInput[]
    OR?: DiseaseWhereInput[]
    NOT?: DiseaseWhereInput | DiseaseWhereInput[]
    disease?: StringFilter<"Disease"> | string
    typeDisease?: StringFilter<"Disease"> | string
    UserDisease?: UserDiseaseListRelationFilter
  }, "id">

  export type DiseaseOrderByWithAggregationInput = {
    id?: SortOrder
    disease?: SortOrder
    typeDisease?: SortOrder
    _count?: DiseaseCountOrderByAggregateInput
    _avg?: DiseaseAvgOrderByAggregateInput
    _max?: DiseaseMaxOrderByAggregateInput
    _min?: DiseaseMinOrderByAggregateInput
    _sum?: DiseaseSumOrderByAggregateInput
  }

  export type DiseaseScalarWhereWithAggregatesInput = {
    AND?: DiseaseScalarWhereWithAggregatesInput | DiseaseScalarWhereWithAggregatesInput[]
    OR?: DiseaseScalarWhereWithAggregatesInput[]
    NOT?: DiseaseScalarWhereWithAggregatesInput | DiseaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Disease"> | number
    disease?: StringWithAggregatesFilter<"Disease"> | string
    typeDisease?: StringWithAggregatesFilter<"Disease"> | string
  }

  export type UserDiseaseWhereInput = {
    AND?: UserDiseaseWhereInput | UserDiseaseWhereInput[]
    OR?: UserDiseaseWhereInput[]
    NOT?: UserDiseaseWhereInput | UserDiseaseWhereInput[]
    userId?: IntFilter<"UserDisease"> | number
    diseaseId?: IntFilter<"UserDisease"> | number
    createdAt?: DateTimeFilter<"UserDisease"> | Date | string
    updatedAt?: DateTimeFilter<"UserDisease"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    disease?: XOR<DiseaseScalarRelationFilter, DiseaseWhereInput>
  }

  export type UserDiseaseOrderByWithRelationInput = {
    userId?: SortOrder
    diseaseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    disease?: DiseaseOrderByWithRelationInput
  }

  export type UserDiseaseWhereUniqueInput = Prisma.AtLeast<{
    userId_diseaseId?: UserDiseaseUserIdDiseaseIdCompoundUniqueInput
    AND?: UserDiseaseWhereInput | UserDiseaseWhereInput[]
    OR?: UserDiseaseWhereInput[]
    NOT?: UserDiseaseWhereInput | UserDiseaseWhereInput[]
    userId?: IntFilter<"UserDisease"> | number
    diseaseId?: IntFilter<"UserDisease"> | number
    createdAt?: DateTimeFilter<"UserDisease"> | Date | string
    updatedAt?: DateTimeFilter<"UserDisease"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    disease?: XOR<DiseaseScalarRelationFilter, DiseaseWhereInput>
  }, "userId_diseaseId">

  export type UserDiseaseOrderByWithAggregationInput = {
    userId?: SortOrder
    diseaseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserDiseaseCountOrderByAggregateInput
    _avg?: UserDiseaseAvgOrderByAggregateInput
    _max?: UserDiseaseMaxOrderByAggregateInput
    _min?: UserDiseaseMinOrderByAggregateInput
    _sum?: UserDiseaseSumOrderByAggregateInput
  }

  export type UserDiseaseScalarWhereWithAggregatesInput = {
    AND?: UserDiseaseScalarWhereWithAggregatesInput | UserDiseaseScalarWhereWithAggregatesInput[]
    OR?: UserDiseaseScalarWhereWithAggregatesInput[]
    NOT?: UserDiseaseScalarWhereWithAggregatesInput | UserDiseaseScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UserDisease"> | number
    diseaseId?: IntWithAggregatesFilter<"UserDisease"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserDisease"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserDisease"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
    surname: string
    age: number
    sex: $Enums.Sex
    weight: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    UserDisease?: UserDiseaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    surname: string
    age: number
    sex: $Enums.Sex
    weight: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
    UserDisease?: UserDiseaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    weight?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserDisease?: UserDiseaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    weight?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserDisease?: UserDiseaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    surname: string
    age: number
    sex: $Enums.Sex
    weight: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    weight?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    weight?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiseaseCreateInput = {
    disease: string
    typeDisease: string
    UserDisease?: UserDiseaseCreateNestedManyWithoutDiseaseInput
  }

  export type DiseaseUncheckedCreateInput = {
    id?: number
    disease: string
    typeDisease: string
    UserDisease?: UserDiseaseUncheckedCreateNestedManyWithoutDiseaseInput
  }

  export type DiseaseUpdateInput = {
    disease?: StringFieldUpdateOperationsInput | string
    typeDisease?: StringFieldUpdateOperationsInput | string
    UserDisease?: UserDiseaseUpdateManyWithoutDiseaseNestedInput
  }

  export type DiseaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    disease?: StringFieldUpdateOperationsInput | string
    typeDisease?: StringFieldUpdateOperationsInput | string
    UserDisease?: UserDiseaseUncheckedUpdateManyWithoutDiseaseNestedInput
  }

  export type DiseaseCreateManyInput = {
    id?: number
    disease: string
    typeDisease: string
  }

  export type DiseaseUpdateManyMutationInput = {
    disease?: StringFieldUpdateOperationsInput | string
    typeDisease?: StringFieldUpdateOperationsInput | string
  }

  export type DiseaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    disease?: StringFieldUpdateOperationsInput | string
    typeDisease?: StringFieldUpdateOperationsInput | string
  }

  export type UserDiseaseCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserDiseaseInput
    disease: DiseaseCreateNestedOneWithoutUserDiseaseInput
  }

  export type UserDiseaseUncheckedCreateInput = {
    userId: number
    diseaseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserDiseaseUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserDiseaseNestedInput
    disease?: DiseaseUpdateOneRequiredWithoutUserDiseaseNestedInput
  }

  export type UserDiseaseUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    diseaseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDiseaseCreateManyInput = {
    userId: number
    diseaseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserDiseaseUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDiseaseUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    diseaseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumSexFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexFilter<$PrismaModel> | $Enums.Sex
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserDiseaseListRelationFilter = {
    every?: UserDiseaseWhereInput
    some?: UserDiseaseWhereInput
    none?: UserDiseaseWhereInput
  }

  export type UserDiseaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    weight?: SortOrder
    height?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    weight?: SortOrder
    height?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumSexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexWithAggregatesFilter<$PrismaModel> | $Enums.Sex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexFilter<$PrismaModel>
    _max?: NestedEnumSexFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DiseaseCountOrderByAggregateInput = {
    id?: SortOrder
    disease?: SortOrder
    typeDisease?: SortOrder
  }

  export type DiseaseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DiseaseMaxOrderByAggregateInput = {
    id?: SortOrder
    disease?: SortOrder
    typeDisease?: SortOrder
  }

  export type DiseaseMinOrderByAggregateInput = {
    id?: SortOrder
    disease?: SortOrder
    typeDisease?: SortOrder
  }

  export type DiseaseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DiseaseScalarRelationFilter = {
    is?: DiseaseWhereInput
    isNot?: DiseaseWhereInput
  }

  export type UserDiseaseUserIdDiseaseIdCompoundUniqueInput = {
    userId: number
    diseaseId: number
  }

  export type UserDiseaseCountOrderByAggregateInput = {
    userId?: SortOrder
    diseaseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserDiseaseAvgOrderByAggregateInput = {
    userId?: SortOrder
    diseaseId?: SortOrder
  }

  export type UserDiseaseMaxOrderByAggregateInput = {
    userId?: SortOrder
    diseaseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserDiseaseMinOrderByAggregateInput = {
    userId?: SortOrder
    diseaseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserDiseaseSumOrderByAggregateInput = {
    userId?: SortOrder
    diseaseId?: SortOrder
  }

  export type UserDiseaseCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDiseaseCreateWithoutUserInput, UserDiseaseUncheckedCreateWithoutUserInput> | UserDiseaseCreateWithoutUserInput[] | UserDiseaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDiseaseCreateOrConnectWithoutUserInput | UserDiseaseCreateOrConnectWithoutUserInput[]
    createMany?: UserDiseaseCreateManyUserInputEnvelope
    connect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
  }

  export type UserDiseaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDiseaseCreateWithoutUserInput, UserDiseaseUncheckedCreateWithoutUserInput> | UserDiseaseCreateWithoutUserInput[] | UserDiseaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDiseaseCreateOrConnectWithoutUserInput | UserDiseaseCreateOrConnectWithoutUserInput[]
    createMany?: UserDiseaseCreateManyUserInputEnvelope
    connect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSexFieldUpdateOperationsInput = {
    set?: $Enums.Sex
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserDiseaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDiseaseCreateWithoutUserInput, UserDiseaseUncheckedCreateWithoutUserInput> | UserDiseaseCreateWithoutUserInput[] | UserDiseaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDiseaseCreateOrConnectWithoutUserInput | UserDiseaseCreateOrConnectWithoutUserInput[]
    upsert?: UserDiseaseUpsertWithWhereUniqueWithoutUserInput | UserDiseaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDiseaseCreateManyUserInputEnvelope
    set?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    disconnect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    delete?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    connect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    update?: UserDiseaseUpdateWithWhereUniqueWithoutUserInput | UserDiseaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDiseaseUpdateManyWithWhereWithoutUserInput | UserDiseaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDiseaseScalarWhereInput | UserDiseaseScalarWhereInput[]
  }

  export type UserDiseaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDiseaseCreateWithoutUserInput, UserDiseaseUncheckedCreateWithoutUserInput> | UserDiseaseCreateWithoutUserInput[] | UserDiseaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDiseaseCreateOrConnectWithoutUserInput | UserDiseaseCreateOrConnectWithoutUserInput[]
    upsert?: UserDiseaseUpsertWithWhereUniqueWithoutUserInput | UserDiseaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDiseaseCreateManyUserInputEnvelope
    set?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    disconnect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    delete?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    connect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    update?: UserDiseaseUpdateWithWhereUniqueWithoutUserInput | UserDiseaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDiseaseUpdateManyWithWhereWithoutUserInput | UserDiseaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDiseaseScalarWhereInput | UserDiseaseScalarWhereInput[]
  }

  export type UserDiseaseCreateNestedManyWithoutDiseaseInput = {
    create?: XOR<UserDiseaseCreateWithoutDiseaseInput, UserDiseaseUncheckedCreateWithoutDiseaseInput> | UserDiseaseCreateWithoutDiseaseInput[] | UserDiseaseUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: UserDiseaseCreateOrConnectWithoutDiseaseInput | UserDiseaseCreateOrConnectWithoutDiseaseInput[]
    createMany?: UserDiseaseCreateManyDiseaseInputEnvelope
    connect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
  }

  export type UserDiseaseUncheckedCreateNestedManyWithoutDiseaseInput = {
    create?: XOR<UserDiseaseCreateWithoutDiseaseInput, UserDiseaseUncheckedCreateWithoutDiseaseInput> | UserDiseaseCreateWithoutDiseaseInput[] | UserDiseaseUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: UserDiseaseCreateOrConnectWithoutDiseaseInput | UserDiseaseCreateOrConnectWithoutDiseaseInput[]
    createMany?: UserDiseaseCreateManyDiseaseInputEnvelope
    connect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
  }

  export type UserDiseaseUpdateManyWithoutDiseaseNestedInput = {
    create?: XOR<UserDiseaseCreateWithoutDiseaseInput, UserDiseaseUncheckedCreateWithoutDiseaseInput> | UserDiseaseCreateWithoutDiseaseInput[] | UserDiseaseUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: UserDiseaseCreateOrConnectWithoutDiseaseInput | UserDiseaseCreateOrConnectWithoutDiseaseInput[]
    upsert?: UserDiseaseUpsertWithWhereUniqueWithoutDiseaseInput | UserDiseaseUpsertWithWhereUniqueWithoutDiseaseInput[]
    createMany?: UserDiseaseCreateManyDiseaseInputEnvelope
    set?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    disconnect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    delete?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    connect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    update?: UserDiseaseUpdateWithWhereUniqueWithoutDiseaseInput | UserDiseaseUpdateWithWhereUniqueWithoutDiseaseInput[]
    updateMany?: UserDiseaseUpdateManyWithWhereWithoutDiseaseInput | UserDiseaseUpdateManyWithWhereWithoutDiseaseInput[]
    deleteMany?: UserDiseaseScalarWhereInput | UserDiseaseScalarWhereInput[]
  }

  export type UserDiseaseUncheckedUpdateManyWithoutDiseaseNestedInput = {
    create?: XOR<UserDiseaseCreateWithoutDiseaseInput, UserDiseaseUncheckedCreateWithoutDiseaseInput> | UserDiseaseCreateWithoutDiseaseInput[] | UserDiseaseUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: UserDiseaseCreateOrConnectWithoutDiseaseInput | UserDiseaseCreateOrConnectWithoutDiseaseInput[]
    upsert?: UserDiseaseUpsertWithWhereUniqueWithoutDiseaseInput | UserDiseaseUpsertWithWhereUniqueWithoutDiseaseInput[]
    createMany?: UserDiseaseCreateManyDiseaseInputEnvelope
    set?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    disconnect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    delete?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    connect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    update?: UserDiseaseUpdateWithWhereUniqueWithoutDiseaseInput | UserDiseaseUpdateWithWhereUniqueWithoutDiseaseInput[]
    updateMany?: UserDiseaseUpdateManyWithWhereWithoutDiseaseInput | UserDiseaseUpdateManyWithWhereWithoutDiseaseInput[]
    deleteMany?: UserDiseaseScalarWhereInput | UserDiseaseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserDiseaseInput = {
    create?: XOR<UserCreateWithoutUserDiseaseInput, UserUncheckedCreateWithoutUserDiseaseInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserDiseaseInput
    connect?: UserWhereUniqueInput
  }

  export type DiseaseCreateNestedOneWithoutUserDiseaseInput = {
    create?: XOR<DiseaseCreateWithoutUserDiseaseInput, DiseaseUncheckedCreateWithoutUserDiseaseInput>
    connectOrCreate?: DiseaseCreateOrConnectWithoutUserDiseaseInput
    connect?: DiseaseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserDiseaseNestedInput = {
    create?: XOR<UserCreateWithoutUserDiseaseInput, UserUncheckedCreateWithoutUserDiseaseInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserDiseaseInput
    upsert?: UserUpsertWithoutUserDiseaseInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserDiseaseInput, UserUpdateWithoutUserDiseaseInput>, UserUncheckedUpdateWithoutUserDiseaseInput>
  }

  export type DiseaseUpdateOneRequiredWithoutUserDiseaseNestedInput = {
    create?: XOR<DiseaseCreateWithoutUserDiseaseInput, DiseaseUncheckedCreateWithoutUserDiseaseInput>
    connectOrCreate?: DiseaseCreateOrConnectWithoutUserDiseaseInput
    upsert?: DiseaseUpsertWithoutUserDiseaseInput
    connect?: DiseaseWhereUniqueInput
    update?: XOR<XOR<DiseaseUpdateToOneWithWhereWithoutUserDiseaseInput, DiseaseUpdateWithoutUserDiseaseInput>, DiseaseUncheckedUpdateWithoutUserDiseaseInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumSexFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexFilter<$PrismaModel> | $Enums.Sex
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedEnumSexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexWithAggregatesFilter<$PrismaModel> | $Enums.Sex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexFilter<$PrismaModel>
    _max?: NestedEnumSexFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserDiseaseCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    disease: DiseaseCreateNestedOneWithoutUserDiseaseInput
  }

  export type UserDiseaseUncheckedCreateWithoutUserInput = {
    diseaseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserDiseaseCreateOrConnectWithoutUserInput = {
    where: UserDiseaseWhereUniqueInput
    create: XOR<UserDiseaseCreateWithoutUserInput, UserDiseaseUncheckedCreateWithoutUserInput>
  }

  export type UserDiseaseCreateManyUserInputEnvelope = {
    data: UserDiseaseCreateManyUserInput | UserDiseaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserDiseaseUpsertWithWhereUniqueWithoutUserInput = {
    where: UserDiseaseWhereUniqueInput
    update: XOR<UserDiseaseUpdateWithoutUserInput, UserDiseaseUncheckedUpdateWithoutUserInput>
    create: XOR<UserDiseaseCreateWithoutUserInput, UserDiseaseUncheckedCreateWithoutUserInput>
  }

  export type UserDiseaseUpdateWithWhereUniqueWithoutUserInput = {
    where: UserDiseaseWhereUniqueInput
    data: XOR<UserDiseaseUpdateWithoutUserInput, UserDiseaseUncheckedUpdateWithoutUserInput>
  }

  export type UserDiseaseUpdateManyWithWhereWithoutUserInput = {
    where: UserDiseaseScalarWhereInput
    data: XOR<UserDiseaseUpdateManyMutationInput, UserDiseaseUncheckedUpdateManyWithoutUserInput>
  }

  export type UserDiseaseScalarWhereInput = {
    AND?: UserDiseaseScalarWhereInput | UserDiseaseScalarWhereInput[]
    OR?: UserDiseaseScalarWhereInput[]
    NOT?: UserDiseaseScalarWhereInput | UserDiseaseScalarWhereInput[]
    userId?: IntFilter<"UserDisease"> | number
    diseaseId?: IntFilter<"UserDisease"> | number
    createdAt?: DateTimeFilter<"UserDisease"> | Date | string
    updatedAt?: DateTimeFilter<"UserDisease"> | Date | string
  }

  export type UserDiseaseCreateWithoutDiseaseInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserDiseaseInput
  }

  export type UserDiseaseUncheckedCreateWithoutDiseaseInput = {
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserDiseaseCreateOrConnectWithoutDiseaseInput = {
    where: UserDiseaseWhereUniqueInput
    create: XOR<UserDiseaseCreateWithoutDiseaseInput, UserDiseaseUncheckedCreateWithoutDiseaseInput>
  }

  export type UserDiseaseCreateManyDiseaseInputEnvelope = {
    data: UserDiseaseCreateManyDiseaseInput | UserDiseaseCreateManyDiseaseInput[]
    skipDuplicates?: boolean
  }

  export type UserDiseaseUpsertWithWhereUniqueWithoutDiseaseInput = {
    where: UserDiseaseWhereUniqueInput
    update: XOR<UserDiseaseUpdateWithoutDiseaseInput, UserDiseaseUncheckedUpdateWithoutDiseaseInput>
    create: XOR<UserDiseaseCreateWithoutDiseaseInput, UserDiseaseUncheckedCreateWithoutDiseaseInput>
  }

  export type UserDiseaseUpdateWithWhereUniqueWithoutDiseaseInput = {
    where: UserDiseaseWhereUniqueInput
    data: XOR<UserDiseaseUpdateWithoutDiseaseInput, UserDiseaseUncheckedUpdateWithoutDiseaseInput>
  }

  export type UserDiseaseUpdateManyWithWhereWithoutDiseaseInput = {
    where: UserDiseaseScalarWhereInput
    data: XOR<UserDiseaseUpdateManyMutationInput, UserDiseaseUncheckedUpdateManyWithoutDiseaseInput>
  }

  export type UserCreateWithoutUserDiseaseInput = {
    email: string
    password: string
    name: string
    surname: string
    age: number
    sex: $Enums.Sex
    weight: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutUserDiseaseInput = {
    id?: number
    email: string
    password: string
    name: string
    surname: string
    age: number
    sex: $Enums.Sex
    weight: number
    height: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutUserDiseaseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserDiseaseInput, UserUncheckedCreateWithoutUserDiseaseInput>
  }

  export type DiseaseCreateWithoutUserDiseaseInput = {
    disease: string
    typeDisease: string
  }

  export type DiseaseUncheckedCreateWithoutUserDiseaseInput = {
    id?: number
    disease: string
    typeDisease: string
  }

  export type DiseaseCreateOrConnectWithoutUserDiseaseInput = {
    where: DiseaseWhereUniqueInput
    create: XOR<DiseaseCreateWithoutUserDiseaseInput, DiseaseUncheckedCreateWithoutUserDiseaseInput>
  }

  export type UserUpsertWithoutUserDiseaseInput = {
    update: XOR<UserUpdateWithoutUserDiseaseInput, UserUncheckedUpdateWithoutUserDiseaseInput>
    create: XOR<UserCreateWithoutUserDiseaseInput, UserUncheckedCreateWithoutUserDiseaseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserDiseaseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserDiseaseInput, UserUncheckedUpdateWithoutUserDiseaseInput>
  }

  export type UserUpdateWithoutUserDiseaseInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    weight?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutUserDiseaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    weight?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiseaseUpsertWithoutUserDiseaseInput = {
    update: XOR<DiseaseUpdateWithoutUserDiseaseInput, DiseaseUncheckedUpdateWithoutUserDiseaseInput>
    create: XOR<DiseaseCreateWithoutUserDiseaseInput, DiseaseUncheckedCreateWithoutUserDiseaseInput>
    where?: DiseaseWhereInput
  }

  export type DiseaseUpdateToOneWithWhereWithoutUserDiseaseInput = {
    where?: DiseaseWhereInput
    data: XOR<DiseaseUpdateWithoutUserDiseaseInput, DiseaseUncheckedUpdateWithoutUserDiseaseInput>
  }

  export type DiseaseUpdateWithoutUserDiseaseInput = {
    disease?: StringFieldUpdateOperationsInput | string
    typeDisease?: StringFieldUpdateOperationsInput | string
  }

  export type DiseaseUncheckedUpdateWithoutUserDiseaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    disease?: StringFieldUpdateOperationsInput | string
    typeDisease?: StringFieldUpdateOperationsInput | string
  }

  export type UserDiseaseCreateManyUserInput = {
    diseaseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserDiseaseUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disease?: DiseaseUpdateOneRequiredWithoutUserDiseaseNestedInput
  }

  export type UserDiseaseUncheckedUpdateWithoutUserInput = {
    diseaseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDiseaseUncheckedUpdateManyWithoutUserInput = {
    diseaseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDiseaseCreateManyDiseaseInput = {
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserDiseaseUpdateWithoutDiseaseInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserDiseaseNestedInput
  }

  export type UserDiseaseUncheckedUpdateWithoutDiseaseInput = {
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDiseaseUncheckedUpdateManyWithoutDiseaseInput = {
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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