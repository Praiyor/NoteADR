
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model adr
 * 
 */
export type adr = $Result.DefaultSelection<Prisma.$adrPayload>
/**
 * Model template
 * 
 */
export type template = $Result.DefaultSelection<Prisma.$templatePayload>
/**
 * Model field
 * 
 */
export type field = $Result.DefaultSelection<Prisma.$fieldPayload>
/**
 * Model rule
 * 
 */
export type rule = $Result.DefaultSelection<Prisma.$rulePayload>
/**
 * Model categoria
 * 
 */
export type categoria = $Result.DefaultSelection<Prisma.$categoriaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Adrs
 * const adrs = await prisma.adr.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Adrs
   * const adrs = await prisma.adr.findMany()
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
   * `prisma.adr`: Exposes CRUD operations for the **adr** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adrs
    * const adrs = await prisma.adr.findMany()
    * ```
    */
  get adr(): Prisma.adrDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.templateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.field`: Exposes CRUD operations for the **field** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fields
    * const fields = await prisma.field.findMany()
    * ```
    */
  get field(): Prisma.fieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rule`: Exposes CRUD operations for the **rule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rules
    * const rules = await prisma.rule.findMany()
    * ```
    */
  get rule(): Prisma.ruleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.categoriaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    adr: 'adr',
    template: 'template',
    field: 'field',
    rule: 'rule',
    categoria: 'categoria'
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
      modelProps: "adr" | "template" | "field" | "rule" | "categoria"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      adr: {
        payload: Prisma.$adrPayload<ExtArgs>
        fields: Prisma.adrFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adrFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adrPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adrFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adrPayload>
          }
          findFirst: {
            args: Prisma.adrFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adrPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adrFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adrPayload>
          }
          findMany: {
            args: Prisma.adrFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adrPayload>[]
          }
          create: {
            args: Prisma.adrCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adrPayload>
          }
          createMany: {
            args: Prisma.adrCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adrCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adrPayload>[]
          }
          delete: {
            args: Prisma.adrDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adrPayload>
          }
          update: {
            args: Prisma.adrUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adrPayload>
          }
          deleteMany: {
            args: Prisma.adrDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adrUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adrUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adrPayload>[]
          }
          upsert: {
            args: Prisma.adrUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adrPayload>
          }
          aggregate: {
            args: Prisma.AdrAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdr>
          }
          groupBy: {
            args: Prisma.adrGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdrGroupByOutputType>[]
          }
          count: {
            args: Prisma.adrCountArgs<ExtArgs>
            result: $Utils.Optional<AdrCountAggregateOutputType> | number
          }
        }
      }
      template: {
        payload: Prisma.$templatePayload<ExtArgs>
        fields: Prisma.templateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.templateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.templateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload>
          }
          findFirst: {
            args: Prisma.templateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.templateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload>
          }
          findMany: {
            args: Prisma.templateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload>[]
          }
          create: {
            args: Prisma.templateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload>
          }
          createMany: {
            args: Prisma.templateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.templateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload>[]
          }
          delete: {
            args: Prisma.templateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload>
          }
          update: {
            args: Prisma.templateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload>
          }
          deleteMany: {
            args: Prisma.templateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.templateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.templateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload>[]
          }
          upsert: {
            args: Prisma.templateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.templateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.templateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      field: {
        payload: Prisma.$fieldPayload<ExtArgs>
        fields: Prisma.fieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldPayload>
          }
          findFirst: {
            args: Prisma.fieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldPayload>
          }
          findMany: {
            args: Prisma.fieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldPayload>[]
          }
          create: {
            args: Prisma.fieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldPayload>
          }
          createMany: {
            args: Prisma.fieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.fieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldPayload>[]
          }
          delete: {
            args: Prisma.fieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldPayload>
          }
          update: {
            args: Prisma.fieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldPayload>
          }
          deleteMany: {
            args: Prisma.fieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.fieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldPayload>[]
          }
          upsert: {
            args: Prisma.fieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldPayload>
          }
          aggregate: {
            args: Prisma.FieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateField>
          }
          groupBy: {
            args: Prisma.fieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<FieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.fieldCountArgs<ExtArgs>
            result: $Utils.Optional<FieldCountAggregateOutputType> | number
          }
        }
      }
      rule: {
        payload: Prisma.$rulePayload<ExtArgs>
        fields: Prisma.ruleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ruleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ruleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rulePayload>
          }
          findFirst: {
            args: Prisma.ruleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ruleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rulePayload>
          }
          findMany: {
            args: Prisma.ruleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rulePayload>[]
          }
          create: {
            args: Prisma.ruleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rulePayload>
          }
          createMany: {
            args: Prisma.ruleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ruleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rulePayload>[]
          }
          delete: {
            args: Prisma.ruleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rulePayload>
          }
          update: {
            args: Prisma.ruleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rulePayload>
          }
          deleteMany: {
            args: Prisma.ruleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ruleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ruleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rulePayload>[]
          }
          upsert: {
            args: Prisma.ruleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rulePayload>
          }
          aggregate: {
            args: Prisma.RuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRule>
          }
          groupBy: {
            args: Prisma.ruleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ruleCountArgs<ExtArgs>
            result: $Utils.Optional<RuleCountAggregateOutputType> | number
          }
        }
      }
      categoria: {
        payload: Prisma.$categoriaPayload<ExtArgs>
        fields: Prisma.categoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findFirst: {
            args: Prisma.categoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findMany: {
            args: Prisma.categoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>[]
          }
          create: {
            args: Prisma.categoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          createMany: {
            args: Prisma.categoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>[]
          }
          delete: {
            args: Prisma.categoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          update: {
            args: Prisma.categoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          deleteMany: {
            args: Prisma.categoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>[]
          }
          upsert: {
            args: Prisma.categoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.categoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    adr?: adrOmit
    template?: templateOmit
    field?: fieldOmit
    rule?: ruleOmit
    categoria?: categoriaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type AdrCountOutputType
   */

  export type AdrCountOutputType = {
    categorias: number
  }

  export type AdrCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorias?: boolean | AdrCountOutputTypeCountCategoriasArgs
  }

  // Custom InputTypes
  /**
   * AdrCountOutputType without action
   */
  export type AdrCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdrCountOutputType
     */
    select?: AdrCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdrCountOutputType without action
   */
  export type AdrCountOutputTypeCountCategoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriaWhereInput
  }


  /**
   * Count Type TemplateCountOutputType
   */

  export type TemplateCountOutputType = {
    adrs: number
  }

  export type TemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adrs?: boolean | TemplateCountOutputTypeCountAdrsArgs
  }

  // Custom InputTypes
  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCountOutputType
     */
    select?: TemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountAdrsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adrWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    adrs: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adrs?: boolean | CategoriaCountOutputTypeCountAdrsArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountAdrsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adrWhereInput
  }


  /**
   * Models
   */

  /**
   * Model adr
   */

  export type AggregateAdr = {
    _count: AdrCountAggregateOutputType | null
    _avg: AdrAvgAggregateOutputType | null
    _sum: AdrSumAggregateOutputType | null
    _min: AdrMinAggregateOutputType | null
    _max: AdrMaxAggregateOutputType | null
  }

  export type AdrAvgAggregateOutputType = {
    id: number | null
    templateId: number | null
    substituidoPor: number | null
  }

  export type AdrSumAggregateOutputType = {
    id: number | null
    templateId: number | null
    substituidoPor: number | null
  }

  export type AdrMinAggregateOutputType = {
    id: number | null
    nome: string | null
    templateId: number | null
    substituido: boolean | null
    substituidoPor: number | null
    valido: boolean | null
  }

  export type AdrMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    templateId: number | null
    substituido: boolean | null
    substituidoPor: number | null
    valido: boolean | null
  }

  export type AdrCountAggregateOutputType = {
    id: number
    nome: number
    templateId: number
    substituido: number
    substituidoPor: number
    valido: number
    _all: number
  }


  export type AdrAvgAggregateInputType = {
    id?: true
    templateId?: true
    substituidoPor?: true
  }

  export type AdrSumAggregateInputType = {
    id?: true
    templateId?: true
    substituidoPor?: true
  }

  export type AdrMinAggregateInputType = {
    id?: true
    nome?: true
    templateId?: true
    substituido?: true
    substituidoPor?: true
    valido?: true
  }

  export type AdrMaxAggregateInputType = {
    id?: true
    nome?: true
    templateId?: true
    substituido?: true
    substituidoPor?: true
    valido?: true
  }

  export type AdrCountAggregateInputType = {
    id?: true
    nome?: true
    templateId?: true
    substituido?: true
    substituidoPor?: true
    valido?: true
    _all?: true
  }

  export type AdrAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adr to aggregate.
     */
    where?: adrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adrs to fetch.
     */
    orderBy?: adrOrderByWithRelationInput | adrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned adrs
    **/
    _count?: true | AdrCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdrAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdrSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdrMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdrMaxAggregateInputType
  }

  export type GetAdrAggregateType<T extends AdrAggregateArgs> = {
        [P in keyof T & keyof AggregateAdr]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdr[P]>
      : GetScalarType<T[P], AggregateAdr[P]>
  }




  export type adrGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adrWhereInput
    orderBy?: adrOrderByWithAggregationInput | adrOrderByWithAggregationInput[]
    by: AdrScalarFieldEnum[] | AdrScalarFieldEnum
    having?: adrScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdrCountAggregateInputType | true
    _avg?: AdrAvgAggregateInputType
    _sum?: AdrSumAggregateInputType
    _min?: AdrMinAggregateInputType
    _max?: AdrMaxAggregateInputType
  }

  export type AdrGroupByOutputType = {
    id: number
    nome: string
    templateId: number
    substituido: boolean
    substituidoPor: number | null
    valido: boolean
    _count: AdrCountAggregateOutputType | null
    _avg: AdrAvgAggregateOutputType | null
    _sum: AdrSumAggregateOutputType | null
    _min: AdrMinAggregateOutputType | null
    _max: AdrMaxAggregateOutputType | null
  }

  type GetAdrGroupByPayload<T extends adrGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdrGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdrGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdrGroupByOutputType[P]>
            : GetScalarType<T[P], AdrGroupByOutputType[P]>
        }
      >
    >


  export type adrSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    templateId?: boolean
    substituido?: boolean
    substituidoPor?: boolean
    valido?: boolean
    categorias?: boolean | adr$categoriasArgs<ExtArgs>
    template?: boolean | templateDefaultArgs<ExtArgs>
    _count?: boolean | AdrCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adr"]>

  export type adrSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    templateId?: boolean
    substituido?: boolean
    substituidoPor?: boolean
    valido?: boolean
    template?: boolean | templateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adr"]>

  export type adrSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    templateId?: boolean
    substituido?: boolean
    substituidoPor?: boolean
    valido?: boolean
    template?: boolean | templateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adr"]>

  export type adrSelectScalar = {
    id?: boolean
    nome?: boolean
    templateId?: boolean
    substituido?: boolean
    substituidoPor?: boolean
    valido?: boolean
  }

  export type adrOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "templateId" | "substituido" | "substituidoPor" | "valido", ExtArgs["result"]["adr"]>
  export type adrInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorias?: boolean | adr$categoriasArgs<ExtArgs>
    template?: boolean | templateDefaultArgs<ExtArgs>
    _count?: boolean | AdrCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type adrIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | templateDefaultArgs<ExtArgs>
  }
  export type adrIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | templateDefaultArgs<ExtArgs>
  }

  export type $adrPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "adr"
    objects: {
      categorias: Prisma.$categoriaPayload<ExtArgs>[]
      template: Prisma.$templatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      templateId: number
      substituido: boolean
      substituidoPor: number | null
      valido: boolean
    }, ExtArgs["result"]["adr"]>
    composites: {}
  }

  type adrGetPayload<S extends boolean | null | undefined | adrDefaultArgs> = $Result.GetResult<Prisma.$adrPayload, S>

  type adrCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adrFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdrCountAggregateInputType | true
    }

  export interface adrDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['adr'], meta: { name: 'adr' } }
    /**
     * Find zero or one Adr that matches the filter.
     * @param {adrFindUniqueArgs} args - Arguments to find a Adr
     * @example
     * // Get one Adr
     * const adr = await prisma.adr.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adrFindUniqueArgs>(args: SelectSubset<T, adrFindUniqueArgs<ExtArgs>>): Prisma__adrClient<$Result.GetResult<Prisma.$adrPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adr that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adrFindUniqueOrThrowArgs} args - Arguments to find a Adr
     * @example
     * // Get one Adr
     * const adr = await prisma.adr.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adrFindUniqueOrThrowArgs>(args: SelectSubset<T, adrFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adrClient<$Result.GetResult<Prisma.$adrPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adr that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adrFindFirstArgs} args - Arguments to find a Adr
     * @example
     * // Get one Adr
     * const adr = await prisma.adr.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adrFindFirstArgs>(args?: SelectSubset<T, adrFindFirstArgs<ExtArgs>>): Prisma__adrClient<$Result.GetResult<Prisma.$adrPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adr that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adrFindFirstOrThrowArgs} args - Arguments to find a Adr
     * @example
     * // Get one Adr
     * const adr = await prisma.adr.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adrFindFirstOrThrowArgs>(args?: SelectSubset<T, adrFindFirstOrThrowArgs<ExtArgs>>): Prisma__adrClient<$Result.GetResult<Prisma.$adrPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adrs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adrFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adrs
     * const adrs = await prisma.adr.findMany()
     * 
     * // Get first 10 Adrs
     * const adrs = await prisma.adr.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adrWithIdOnly = await prisma.adr.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adrFindManyArgs>(args?: SelectSubset<T, adrFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adrPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adr.
     * @param {adrCreateArgs} args - Arguments to create a Adr.
     * @example
     * // Create one Adr
     * const Adr = await prisma.adr.create({
     *   data: {
     *     // ... data to create a Adr
     *   }
     * })
     * 
     */
    create<T extends adrCreateArgs>(args: SelectSubset<T, adrCreateArgs<ExtArgs>>): Prisma__adrClient<$Result.GetResult<Prisma.$adrPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adrs.
     * @param {adrCreateManyArgs} args - Arguments to create many Adrs.
     * @example
     * // Create many Adrs
     * const adr = await prisma.adr.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adrCreateManyArgs>(args?: SelectSubset<T, adrCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adrs and returns the data saved in the database.
     * @param {adrCreateManyAndReturnArgs} args - Arguments to create many Adrs.
     * @example
     * // Create many Adrs
     * const adr = await prisma.adr.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adrs and only return the `id`
     * const adrWithIdOnly = await prisma.adr.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adrCreateManyAndReturnArgs>(args?: SelectSubset<T, adrCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adrPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Adr.
     * @param {adrDeleteArgs} args - Arguments to delete one Adr.
     * @example
     * // Delete one Adr
     * const Adr = await prisma.adr.delete({
     *   where: {
     *     // ... filter to delete one Adr
     *   }
     * })
     * 
     */
    delete<T extends adrDeleteArgs>(args: SelectSubset<T, adrDeleteArgs<ExtArgs>>): Prisma__adrClient<$Result.GetResult<Prisma.$adrPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adr.
     * @param {adrUpdateArgs} args - Arguments to update one Adr.
     * @example
     * // Update one Adr
     * const adr = await prisma.adr.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adrUpdateArgs>(args: SelectSubset<T, adrUpdateArgs<ExtArgs>>): Prisma__adrClient<$Result.GetResult<Prisma.$adrPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adrs.
     * @param {adrDeleteManyArgs} args - Arguments to filter Adrs to delete.
     * @example
     * // Delete a few Adrs
     * const { count } = await prisma.adr.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adrDeleteManyArgs>(args?: SelectSubset<T, adrDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adrs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adrUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adrs
     * const adr = await prisma.adr.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adrUpdateManyArgs>(args: SelectSubset<T, adrUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adrs and returns the data updated in the database.
     * @param {adrUpdateManyAndReturnArgs} args - Arguments to update many Adrs.
     * @example
     * // Update many Adrs
     * const adr = await prisma.adr.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Adrs and only return the `id`
     * const adrWithIdOnly = await prisma.adr.updateManyAndReturn({
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
    updateManyAndReturn<T extends adrUpdateManyAndReturnArgs>(args: SelectSubset<T, adrUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adrPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Adr.
     * @param {adrUpsertArgs} args - Arguments to update or create a Adr.
     * @example
     * // Update or create a Adr
     * const adr = await prisma.adr.upsert({
     *   create: {
     *     // ... data to create a Adr
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adr we want to update
     *   }
     * })
     */
    upsert<T extends adrUpsertArgs>(args: SelectSubset<T, adrUpsertArgs<ExtArgs>>): Prisma__adrClient<$Result.GetResult<Prisma.$adrPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adrs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adrCountArgs} args - Arguments to filter Adrs to count.
     * @example
     * // Count the number of Adrs
     * const count = await prisma.adr.count({
     *   where: {
     *     // ... the filter for the Adrs we want to count
     *   }
     * })
    **/
    count<T extends adrCountArgs>(
      args?: Subset<T, adrCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdrCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdrAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdrAggregateArgs>(args: Subset<T, AdrAggregateArgs>): Prisma.PrismaPromise<GetAdrAggregateType<T>>

    /**
     * Group by Adr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adrGroupByArgs} args - Group by arguments.
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
      T extends adrGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adrGroupByArgs['orderBy'] }
        : { orderBy?: adrGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adrGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdrGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the adr model
   */
  readonly fields: adrFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for adr.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adrClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categorias<T extends adr$categoriasArgs<ExtArgs> = {}>(args?: Subset<T, adr$categoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    template<T extends templateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, templateDefaultArgs<ExtArgs>>): Prisma__templateClient<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the adr model
   */
  interface adrFieldRefs {
    readonly id: FieldRef<"adr", 'Int'>
    readonly nome: FieldRef<"adr", 'String'>
    readonly templateId: FieldRef<"adr", 'Int'>
    readonly substituido: FieldRef<"adr", 'Boolean'>
    readonly substituidoPor: FieldRef<"adr", 'Int'>
    readonly valido: FieldRef<"adr", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * adr findUnique
   */
  export type adrFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adr
     */
    select?: adrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adr
     */
    omit?: adrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adrInclude<ExtArgs> | null
    /**
     * Filter, which adr to fetch.
     */
    where: adrWhereUniqueInput
  }

  /**
   * adr findUniqueOrThrow
   */
  export type adrFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adr
     */
    select?: adrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adr
     */
    omit?: adrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adrInclude<ExtArgs> | null
    /**
     * Filter, which adr to fetch.
     */
    where: adrWhereUniqueInput
  }

  /**
   * adr findFirst
   */
  export type adrFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adr
     */
    select?: adrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adr
     */
    omit?: adrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adrInclude<ExtArgs> | null
    /**
     * Filter, which adr to fetch.
     */
    where?: adrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adrs to fetch.
     */
    orderBy?: adrOrderByWithRelationInput | adrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adrs.
     */
    cursor?: adrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adrs.
     */
    distinct?: AdrScalarFieldEnum | AdrScalarFieldEnum[]
  }

  /**
   * adr findFirstOrThrow
   */
  export type adrFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adr
     */
    select?: adrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adr
     */
    omit?: adrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adrInclude<ExtArgs> | null
    /**
     * Filter, which adr to fetch.
     */
    where?: adrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adrs to fetch.
     */
    orderBy?: adrOrderByWithRelationInput | adrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adrs.
     */
    cursor?: adrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adrs.
     */
    distinct?: AdrScalarFieldEnum | AdrScalarFieldEnum[]
  }

  /**
   * adr findMany
   */
  export type adrFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adr
     */
    select?: adrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adr
     */
    omit?: adrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adrInclude<ExtArgs> | null
    /**
     * Filter, which adrs to fetch.
     */
    where?: adrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adrs to fetch.
     */
    orderBy?: adrOrderByWithRelationInput | adrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing adrs.
     */
    cursor?: adrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adrs.
     */
    skip?: number
    distinct?: AdrScalarFieldEnum | AdrScalarFieldEnum[]
  }

  /**
   * adr create
   */
  export type adrCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adr
     */
    select?: adrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adr
     */
    omit?: adrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adrInclude<ExtArgs> | null
    /**
     * The data needed to create a adr.
     */
    data: XOR<adrCreateInput, adrUncheckedCreateInput>
  }

  /**
   * adr createMany
   */
  export type adrCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many adrs.
     */
    data: adrCreateManyInput | adrCreateManyInput[]
  }

  /**
   * adr createManyAndReturn
   */
  export type adrCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adr
     */
    select?: adrSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the adr
     */
    omit?: adrOmit<ExtArgs> | null
    /**
     * The data used to create many adrs.
     */
    data: adrCreateManyInput | adrCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adrIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * adr update
   */
  export type adrUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adr
     */
    select?: adrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adr
     */
    omit?: adrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adrInclude<ExtArgs> | null
    /**
     * The data needed to update a adr.
     */
    data: XOR<adrUpdateInput, adrUncheckedUpdateInput>
    /**
     * Choose, which adr to update.
     */
    where: adrWhereUniqueInput
  }

  /**
   * adr updateMany
   */
  export type adrUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update adrs.
     */
    data: XOR<adrUpdateManyMutationInput, adrUncheckedUpdateManyInput>
    /**
     * Filter which adrs to update
     */
    where?: adrWhereInput
    /**
     * Limit how many adrs to update.
     */
    limit?: number
  }

  /**
   * adr updateManyAndReturn
   */
  export type adrUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adr
     */
    select?: adrSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the adr
     */
    omit?: adrOmit<ExtArgs> | null
    /**
     * The data used to update adrs.
     */
    data: XOR<adrUpdateManyMutationInput, adrUncheckedUpdateManyInput>
    /**
     * Filter which adrs to update
     */
    where?: adrWhereInput
    /**
     * Limit how many adrs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adrIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * adr upsert
   */
  export type adrUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adr
     */
    select?: adrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adr
     */
    omit?: adrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adrInclude<ExtArgs> | null
    /**
     * The filter to search for the adr to update in case it exists.
     */
    where: adrWhereUniqueInput
    /**
     * In case the adr found by the `where` argument doesn't exist, create a new adr with this data.
     */
    create: XOR<adrCreateInput, adrUncheckedCreateInput>
    /**
     * In case the adr was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adrUpdateInput, adrUncheckedUpdateInput>
  }

  /**
   * adr delete
   */
  export type adrDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adr
     */
    select?: adrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adr
     */
    omit?: adrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adrInclude<ExtArgs> | null
    /**
     * Filter which adr to delete.
     */
    where: adrWhereUniqueInput
  }

  /**
   * adr deleteMany
   */
  export type adrDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adrs to delete
     */
    where?: adrWhereInput
    /**
     * Limit how many adrs to delete.
     */
    limit?: number
  }

  /**
   * adr.categorias
   */
  export type adr$categoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    where?: categoriaWhereInput
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    cursor?: categoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * adr without action
   */
  export type adrDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adr
     */
    select?: adrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adr
     */
    omit?: adrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adrInclude<ExtArgs> | null
  }


  /**
   * Model template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateAvgAggregateOutputType = {
    id: number | null
    fieldId: number | null
  }

  export type TemplateSumAggregateOutputType = {
    id: number | null
    fieldId: number | null
  }

  export type TemplateMinAggregateOutputType = {
    id: number | null
    nome: string | null
    fieldId: number | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    fieldId: number | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    nome: number
    fieldId: number
    _all: number
  }


  export type TemplateAvgAggregateInputType = {
    id?: true
    fieldId?: true
  }

  export type TemplateSumAggregateInputType = {
    id?: true
    fieldId?: true
  }

  export type TemplateMinAggregateInputType = {
    id?: true
    nome?: true
    fieldId?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    nome?: true
    fieldId?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    nome?: true
    fieldId?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which template to aggregate.
     */
    where?: templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of templates to fetch.
     */
    orderBy?: templateOrderByWithRelationInput | templateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type templateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: templateWhereInput
    orderBy?: templateOrderByWithAggregationInput | templateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: templateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _avg?: TemplateAvgAggregateInputType
    _sum?: TemplateSumAggregateInputType
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: number
    nome: string
    fieldId: number
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends templateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type templateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    fieldId?: boolean
    field?: boolean | fieldDefaultArgs<ExtArgs>
    adrs?: boolean | template$adrsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type templateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    fieldId?: boolean
    field?: boolean | fieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type templateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    fieldId?: boolean
    field?: boolean | fieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type templateSelectScalar = {
    id?: boolean
    nome?: boolean
    fieldId?: boolean
  }

  export type templateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "fieldId", ExtArgs["result"]["template"]>
  export type templateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | fieldDefaultArgs<ExtArgs>
    adrs?: boolean | template$adrsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type templateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | fieldDefaultArgs<ExtArgs>
  }
  export type templateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | fieldDefaultArgs<ExtArgs>
  }

  export type $templatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "template"
    objects: {
      field: Prisma.$fieldPayload<ExtArgs>
      adrs: Prisma.$adrPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      fieldId: number
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type templateGetPayload<S extends boolean | null | undefined | templateDefaultArgs> = $Result.GetResult<Prisma.$templatePayload, S>

  type templateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<templateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface templateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['template'], meta: { name: 'template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {templateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends templateFindUniqueArgs>(args: SelectSubset<T, templateFindUniqueArgs<ExtArgs>>): Prisma__templateClient<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {templateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends templateFindUniqueOrThrowArgs>(args: SelectSubset<T, templateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__templateClient<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends templateFindFirstArgs>(args?: SelectSubset<T, templateFindFirstArgs<ExtArgs>>): Prisma__templateClient<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends templateFindFirstOrThrowArgs>(args?: SelectSubset<T, templateFindFirstOrThrowArgs<ExtArgs>>): Prisma__templateClient<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends templateFindManyArgs>(args?: SelectSubset<T, templateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {templateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends templateCreateArgs>(args: SelectSubset<T, templateCreateArgs<ExtArgs>>): Prisma__templateClient<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {templateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends templateCreateManyArgs>(args?: SelectSubset<T, templateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {templateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends templateCreateManyAndReturnArgs>(args?: SelectSubset<T, templateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template.
     * @param {templateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends templateDeleteArgs>(args: SelectSubset<T, templateDeleteArgs<ExtArgs>>): Prisma__templateClient<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {templateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends templateUpdateArgs>(args: SelectSubset<T, templateUpdateArgs<ExtArgs>>): Prisma__templateClient<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {templateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends templateDeleteManyArgs>(args?: SelectSubset<T, templateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends templateUpdateManyArgs>(args: SelectSubset<T, templateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {templateUpdateManyAndReturnArgs} args - Arguments to update many Templates.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.updateManyAndReturn({
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
    updateManyAndReturn<T extends templateUpdateManyAndReturnArgs>(args: SelectSubset<T, templateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template.
     * @param {templateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends templateUpsertArgs>(args: SelectSubset<T, templateUpsertArgs<ExtArgs>>): Prisma__templateClient<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends templateCountArgs>(
      args?: Subset<T, templateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templateGroupByArgs} args - Group by arguments.
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
      T extends templateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: templateGroupByArgs['orderBy'] }
        : { orderBy?: templateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, templateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the template model
   */
  readonly fields: templateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__templateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    field<T extends fieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, fieldDefaultArgs<ExtArgs>>): Prisma__fieldClient<$Result.GetResult<Prisma.$fieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    adrs<T extends template$adrsArgs<ExtArgs> = {}>(args?: Subset<T, template$adrsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adrPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the template model
   */
  interface templateFieldRefs {
    readonly id: FieldRef<"template", 'Int'>
    readonly nome: FieldRef<"template", 'String'>
    readonly fieldId: FieldRef<"template", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * template findUnique
   */
  export type templateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
    /**
     * Filter, which template to fetch.
     */
    where: templateWhereUniqueInput
  }

  /**
   * template findUniqueOrThrow
   */
  export type templateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
    /**
     * Filter, which template to fetch.
     */
    where: templateWhereUniqueInput
  }

  /**
   * template findFirst
   */
  export type templateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
    /**
     * Filter, which template to fetch.
     */
    where?: templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of templates to fetch.
     */
    orderBy?: templateOrderByWithRelationInput | templateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for templates.
     */
    cursor?: templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * template findFirstOrThrow
   */
  export type templateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
    /**
     * Filter, which template to fetch.
     */
    where?: templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of templates to fetch.
     */
    orderBy?: templateOrderByWithRelationInput | templateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for templates.
     */
    cursor?: templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * template findMany
   */
  export type templateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
    /**
     * Filter, which templates to fetch.
     */
    where?: templateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of templates to fetch.
     */
    orderBy?: templateOrderByWithRelationInput | templateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing templates.
     */
    cursor?: templateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * template create
   */
  export type templateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
    /**
     * The data needed to create a template.
     */
    data: XOR<templateCreateInput, templateUncheckedCreateInput>
  }

  /**
   * template createMany
   */
  export type templateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many templates.
     */
    data: templateCreateManyInput | templateCreateManyInput[]
  }

  /**
   * template createManyAndReturn
   */
  export type templateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * The data used to create many templates.
     */
    data: templateCreateManyInput | templateCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * template update
   */
  export type templateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
    /**
     * The data needed to update a template.
     */
    data: XOR<templateUpdateInput, templateUncheckedUpdateInput>
    /**
     * Choose, which template to update.
     */
    where: templateWhereUniqueInput
  }

  /**
   * template updateMany
   */
  export type templateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update templates.
     */
    data: XOR<templateUpdateManyMutationInput, templateUncheckedUpdateManyInput>
    /**
     * Filter which templates to update
     */
    where?: templateWhereInput
    /**
     * Limit how many templates to update.
     */
    limit?: number
  }

  /**
   * template updateManyAndReturn
   */
  export type templateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * The data used to update templates.
     */
    data: XOR<templateUpdateManyMutationInput, templateUncheckedUpdateManyInput>
    /**
     * Filter which templates to update
     */
    where?: templateWhereInput
    /**
     * Limit how many templates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * template upsert
   */
  export type templateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
    /**
     * The filter to search for the template to update in case it exists.
     */
    where: templateWhereUniqueInput
    /**
     * In case the template found by the `where` argument doesn't exist, create a new template with this data.
     */
    create: XOR<templateCreateInput, templateUncheckedCreateInput>
    /**
     * In case the template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<templateUpdateInput, templateUncheckedUpdateInput>
  }

  /**
   * template delete
   */
  export type templateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
    /**
     * Filter which template to delete.
     */
    where: templateWhereUniqueInput
  }

  /**
   * template deleteMany
   */
  export type templateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which templates to delete
     */
    where?: templateWhereInput
    /**
     * Limit how many templates to delete.
     */
    limit?: number
  }

  /**
   * template.adrs
   */
  export type template$adrsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adr
     */
    select?: adrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adr
     */
    omit?: adrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adrInclude<ExtArgs> | null
    where?: adrWhereInput
    orderBy?: adrOrderByWithRelationInput | adrOrderByWithRelationInput[]
    cursor?: adrWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdrScalarFieldEnum | AdrScalarFieldEnum[]
  }

  /**
   * template without action
   */
  export type templateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
  }


  /**
   * Model field
   */

  export type AggregateField = {
    _count: FieldCountAggregateOutputType | null
    _avg: FieldAvgAggregateOutputType | null
    _sum: FieldSumAggregateOutputType | null
    _min: FieldMinAggregateOutputType | null
    _max: FieldMaxAggregateOutputType | null
  }

  export type FieldAvgAggregateOutputType = {
    id: number | null
    ruleId: number | null
  }

  export type FieldSumAggregateOutputType = {
    id: number | null
    ruleId: number | null
  }

  export type FieldMinAggregateOutputType = {
    id: number | null
    ruleId: number | null
  }

  export type FieldMaxAggregateOutputType = {
    id: number | null
    ruleId: number | null
  }

  export type FieldCountAggregateOutputType = {
    id: number
    campos: number
    ruleId: number
    _all: number
  }


  export type FieldAvgAggregateInputType = {
    id?: true
    ruleId?: true
  }

  export type FieldSumAggregateInputType = {
    id?: true
    ruleId?: true
  }

  export type FieldMinAggregateInputType = {
    id?: true
    ruleId?: true
  }

  export type FieldMaxAggregateInputType = {
    id?: true
    ruleId?: true
  }

  export type FieldCountAggregateInputType = {
    id?: true
    campos?: true
    ruleId?: true
    _all?: true
  }

  export type FieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which field to aggregate.
     */
    where?: fieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fields to fetch.
     */
    orderBy?: fieldOrderByWithRelationInput | fieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fields
    **/
    _count?: true | FieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FieldMaxAggregateInputType
  }

  export type GetFieldAggregateType<T extends FieldAggregateArgs> = {
        [P in keyof T & keyof AggregateField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateField[P]>
      : GetScalarType<T[P], AggregateField[P]>
  }




  export type fieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fieldWhereInput
    orderBy?: fieldOrderByWithAggregationInput | fieldOrderByWithAggregationInput[]
    by: FieldScalarFieldEnum[] | FieldScalarFieldEnum
    having?: fieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FieldCountAggregateInputType | true
    _avg?: FieldAvgAggregateInputType
    _sum?: FieldSumAggregateInputType
    _min?: FieldMinAggregateInputType
    _max?: FieldMaxAggregateInputType
  }

  export type FieldGroupByOutputType = {
    id: number
    campos: JsonValue
    ruleId: number
    _count: FieldCountAggregateOutputType | null
    _avg: FieldAvgAggregateOutputType | null
    _sum: FieldSumAggregateOutputType | null
    _min: FieldMinAggregateOutputType | null
    _max: FieldMaxAggregateOutputType | null
  }

  type GetFieldGroupByPayload<T extends fieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FieldGroupByOutputType[P]>
            : GetScalarType<T[P], FieldGroupByOutputType[P]>
        }
      >
    >


  export type fieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campos?: boolean
    ruleId?: boolean
    rule?: boolean | ruleDefaultArgs<ExtArgs>
    template?: boolean | field$templateArgs<ExtArgs>
  }, ExtArgs["result"]["field"]>

  export type fieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campos?: boolean
    ruleId?: boolean
    rule?: boolean | ruleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["field"]>

  export type fieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campos?: boolean
    ruleId?: boolean
    rule?: boolean | ruleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["field"]>

  export type fieldSelectScalar = {
    id?: boolean
    campos?: boolean
    ruleId?: boolean
  }

  export type fieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campos" | "ruleId", ExtArgs["result"]["field"]>
  export type fieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rule?: boolean | ruleDefaultArgs<ExtArgs>
    template?: boolean | field$templateArgs<ExtArgs>
  }
  export type fieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rule?: boolean | ruleDefaultArgs<ExtArgs>
  }
  export type fieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rule?: boolean | ruleDefaultArgs<ExtArgs>
  }

  export type $fieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "field"
    objects: {
      rule: Prisma.$rulePayload<ExtArgs>
      template: Prisma.$templatePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      campos: Prisma.JsonValue
      ruleId: number
    }, ExtArgs["result"]["field"]>
    composites: {}
  }

  type fieldGetPayload<S extends boolean | null | undefined | fieldDefaultArgs> = $Result.GetResult<Prisma.$fieldPayload, S>

  type fieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FieldCountAggregateInputType | true
    }

  export interface fieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['field'], meta: { name: 'field' } }
    /**
     * Find zero or one Field that matches the filter.
     * @param {fieldFindUniqueArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fieldFindUniqueArgs>(args: SelectSubset<T, fieldFindUniqueArgs<ExtArgs>>): Prisma__fieldClient<$Result.GetResult<Prisma.$fieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Field that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fieldFindUniqueOrThrowArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fieldFindUniqueOrThrowArgs>(args: SelectSubset<T, fieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fieldClient<$Result.GetResult<Prisma.$fieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Field that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldFindFirstArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fieldFindFirstArgs>(args?: SelectSubset<T, fieldFindFirstArgs<ExtArgs>>): Prisma__fieldClient<$Result.GetResult<Prisma.$fieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Field that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldFindFirstOrThrowArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fieldFindFirstOrThrowArgs>(args?: SelectSubset<T, fieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__fieldClient<$Result.GetResult<Prisma.$fieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fields
     * const fields = await prisma.field.findMany()
     * 
     * // Get first 10 Fields
     * const fields = await prisma.field.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fieldWithIdOnly = await prisma.field.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends fieldFindManyArgs>(args?: SelectSubset<T, fieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Field.
     * @param {fieldCreateArgs} args - Arguments to create a Field.
     * @example
     * // Create one Field
     * const Field = await prisma.field.create({
     *   data: {
     *     // ... data to create a Field
     *   }
     * })
     * 
     */
    create<T extends fieldCreateArgs>(args: SelectSubset<T, fieldCreateArgs<ExtArgs>>): Prisma__fieldClient<$Result.GetResult<Prisma.$fieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fields.
     * @param {fieldCreateManyArgs} args - Arguments to create many Fields.
     * @example
     * // Create many Fields
     * const field = await prisma.field.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fieldCreateManyArgs>(args?: SelectSubset<T, fieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fields and returns the data saved in the database.
     * @param {fieldCreateManyAndReturnArgs} args - Arguments to create many Fields.
     * @example
     * // Create many Fields
     * const field = await prisma.field.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fields and only return the `id`
     * const fieldWithIdOnly = await prisma.field.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends fieldCreateManyAndReturnArgs>(args?: SelectSubset<T, fieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Field.
     * @param {fieldDeleteArgs} args - Arguments to delete one Field.
     * @example
     * // Delete one Field
     * const Field = await prisma.field.delete({
     *   where: {
     *     // ... filter to delete one Field
     *   }
     * })
     * 
     */
    delete<T extends fieldDeleteArgs>(args: SelectSubset<T, fieldDeleteArgs<ExtArgs>>): Prisma__fieldClient<$Result.GetResult<Prisma.$fieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Field.
     * @param {fieldUpdateArgs} args - Arguments to update one Field.
     * @example
     * // Update one Field
     * const field = await prisma.field.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fieldUpdateArgs>(args: SelectSubset<T, fieldUpdateArgs<ExtArgs>>): Prisma__fieldClient<$Result.GetResult<Prisma.$fieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fields.
     * @param {fieldDeleteManyArgs} args - Arguments to filter Fields to delete.
     * @example
     * // Delete a few Fields
     * const { count } = await prisma.field.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fieldDeleteManyArgs>(args?: SelectSubset<T, fieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fields
     * const field = await prisma.field.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fieldUpdateManyArgs>(args: SelectSubset<T, fieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fields and returns the data updated in the database.
     * @param {fieldUpdateManyAndReturnArgs} args - Arguments to update many Fields.
     * @example
     * // Update many Fields
     * const field = await prisma.field.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fields and only return the `id`
     * const fieldWithIdOnly = await prisma.field.updateManyAndReturn({
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
    updateManyAndReturn<T extends fieldUpdateManyAndReturnArgs>(args: SelectSubset<T, fieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Field.
     * @param {fieldUpsertArgs} args - Arguments to update or create a Field.
     * @example
     * // Update or create a Field
     * const field = await prisma.field.upsert({
     *   create: {
     *     // ... data to create a Field
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Field we want to update
     *   }
     * })
     */
    upsert<T extends fieldUpsertArgs>(args: SelectSubset<T, fieldUpsertArgs<ExtArgs>>): Prisma__fieldClient<$Result.GetResult<Prisma.$fieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldCountArgs} args - Arguments to filter Fields to count.
     * @example
     * // Count the number of Fields
     * const count = await prisma.field.count({
     *   where: {
     *     // ... the filter for the Fields we want to count
     *   }
     * })
    **/
    count<T extends fieldCountArgs>(
      args?: Subset<T, fieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Field.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FieldAggregateArgs>(args: Subset<T, FieldAggregateArgs>): Prisma.PrismaPromise<GetFieldAggregateType<T>>

    /**
     * Group by Field.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldGroupByArgs} args - Group by arguments.
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
      T extends fieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fieldGroupByArgs['orderBy'] }
        : { orderBy?: fieldGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, fieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the field model
   */
  readonly fields: fieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for field.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rule<T extends ruleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ruleDefaultArgs<ExtArgs>>): Prisma__ruleClient<$Result.GetResult<Prisma.$rulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    template<T extends field$templateArgs<ExtArgs> = {}>(args?: Subset<T, field$templateArgs<ExtArgs>>): Prisma__templateClient<$Result.GetResult<Prisma.$templatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the field model
   */
  interface fieldFieldRefs {
    readonly id: FieldRef<"field", 'Int'>
    readonly campos: FieldRef<"field", 'Json'>
    readonly ruleId: FieldRef<"field", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * field findUnique
   */
  export type fieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the field
     */
    select?: fieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the field
     */
    omit?: fieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldInclude<ExtArgs> | null
    /**
     * Filter, which field to fetch.
     */
    where: fieldWhereUniqueInput
  }

  /**
   * field findUniqueOrThrow
   */
  export type fieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the field
     */
    select?: fieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the field
     */
    omit?: fieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldInclude<ExtArgs> | null
    /**
     * Filter, which field to fetch.
     */
    where: fieldWhereUniqueInput
  }

  /**
   * field findFirst
   */
  export type fieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the field
     */
    select?: fieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the field
     */
    omit?: fieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldInclude<ExtArgs> | null
    /**
     * Filter, which field to fetch.
     */
    where?: fieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fields to fetch.
     */
    orderBy?: fieldOrderByWithRelationInput | fieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fields.
     */
    cursor?: fieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fields.
     */
    distinct?: FieldScalarFieldEnum | FieldScalarFieldEnum[]
  }

  /**
   * field findFirstOrThrow
   */
  export type fieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the field
     */
    select?: fieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the field
     */
    omit?: fieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldInclude<ExtArgs> | null
    /**
     * Filter, which field to fetch.
     */
    where?: fieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fields to fetch.
     */
    orderBy?: fieldOrderByWithRelationInput | fieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fields.
     */
    cursor?: fieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fields.
     */
    distinct?: FieldScalarFieldEnum | FieldScalarFieldEnum[]
  }

  /**
   * field findMany
   */
  export type fieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the field
     */
    select?: fieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the field
     */
    omit?: fieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldInclude<ExtArgs> | null
    /**
     * Filter, which fields to fetch.
     */
    where?: fieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fields to fetch.
     */
    orderBy?: fieldOrderByWithRelationInput | fieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fields.
     */
    cursor?: fieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fields.
     */
    skip?: number
    distinct?: FieldScalarFieldEnum | FieldScalarFieldEnum[]
  }

  /**
   * field create
   */
  export type fieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the field
     */
    select?: fieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the field
     */
    omit?: fieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldInclude<ExtArgs> | null
    /**
     * The data needed to create a field.
     */
    data: XOR<fieldCreateInput, fieldUncheckedCreateInput>
  }

  /**
   * field createMany
   */
  export type fieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fields.
     */
    data: fieldCreateManyInput | fieldCreateManyInput[]
  }

  /**
   * field createManyAndReturn
   */
  export type fieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the field
     */
    select?: fieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the field
     */
    omit?: fieldOmit<ExtArgs> | null
    /**
     * The data used to create many fields.
     */
    data: fieldCreateManyInput | fieldCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * field update
   */
  export type fieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the field
     */
    select?: fieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the field
     */
    omit?: fieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldInclude<ExtArgs> | null
    /**
     * The data needed to update a field.
     */
    data: XOR<fieldUpdateInput, fieldUncheckedUpdateInput>
    /**
     * Choose, which field to update.
     */
    where: fieldWhereUniqueInput
  }

  /**
   * field updateMany
   */
  export type fieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fields.
     */
    data: XOR<fieldUpdateManyMutationInput, fieldUncheckedUpdateManyInput>
    /**
     * Filter which fields to update
     */
    where?: fieldWhereInput
    /**
     * Limit how many fields to update.
     */
    limit?: number
  }

  /**
   * field updateManyAndReturn
   */
  export type fieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the field
     */
    select?: fieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the field
     */
    omit?: fieldOmit<ExtArgs> | null
    /**
     * The data used to update fields.
     */
    data: XOR<fieldUpdateManyMutationInput, fieldUncheckedUpdateManyInput>
    /**
     * Filter which fields to update
     */
    where?: fieldWhereInput
    /**
     * Limit how many fields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * field upsert
   */
  export type fieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the field
     */
    select?: fieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the field
     */
    omit?: fieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldInclude<ExtArgs> | null
    /**
     * The filter to search for the field to update in case it exists.
     */
    where: fieldWhereUniqueInput
    /**
     * In case the field found by the `where` argument doesn't exist, create a new field with this data.
     */
    create: XOR<fieldCreateInput, fieldUncheckedCreateInput>
    /**
     * In case the field was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fieldUpdateInput, fieldUncheckedUpdateInput>
  }

  /**
   * field delete
   */
  export type fieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the field
     */
    select?: fieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the field
     */
    omit?: fieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldInclude<ExtArgs> | null
    /**
     * Filter which field to delete.
     */
    where: fieldWhereUniqueInput
  }

  /**
   * field deleteMany
   */
  export type fieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fields to delete
     */
    where?: fieldWhereInput
    /**
     * Limit how many fields to delete.
     */
    limit?: number
  }

  /**
   * field.template
   */
  export type field$templateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template
     */
    select?: templateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template
     */
    omit?: templateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templateInclude<ExtArgs> | null
    where?: templateWhereInput
  }

  /**
   * field without action
   */
  export type fieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the field
     */
    select?: fieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the field
     */
    omit?: fieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldInclude<ExtArgs> | null
  }


  /**
   * Model rule
   */

  export type AggregateRule = {
    _count: RuleCountAggregateOutputType | null
    _avg: RuleAvgAggregateOutputType | null
    _sum: RuleSumAggregateOutputType | null
    _min: RuleMinAggregateOutputType | null
    _max: RuleMaxAggregateOutputType | null
  }

  export type RuleAvgAggregateOutputType = {
    id: number | null
  }

  export type RuleSumAggregateOutputType = {
    id: number | null
  }

  export type RuleMinAggregateOutputType = {
    id: number | null
  }

  export type RuleMaxAggregateOutputType = {
    id: number | null
  }

  export type RuleCountAggregateOutputType = {
    id: number
    regras: number
    _all: number
  }


  export type RuleAvgAggregateInputType = {
    id?: true
  }

  export type RuleSumAggregateInputType = {
    id?: true
  }

  export type RuleMinAggregateInputType = {
    id?: true
  }

  export type RuleMaxAggregateInputType = {
    id?: true
  }

  export type RuleCountAggregateInputType = {
    id?: true
    regras?: true
    _all?: true
  }

  export type RuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rule to aggregate.
     */
    where?: ruleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rules to fetch.
     */
    orderBy?: ruleOrderByWithRelationInput | ruleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ruleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rules
    **/
    _count?: true | RuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RuleMaxAggregateInputType
  }

  export type GetRuleAggregateType<T extends RuleAggregateArgs> = {
        [P in keyof T & keyof AggregateRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRule[P]>
      : GetScalarType<T[P], AggregateRule[P]>
  }




  export type ruleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ruleWhereInput
    orderBy?: ruleOrderByWithAggregationInput | ruleOrderByWithAggregationInput[]
    by: RuleScalarFieldEnum[] | RuleScalarFieldEnum
    having?: ruleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RuleCountAggregateInputType | true
    _avg?: RuleAvgAggregateInputType
    _sum?: RuleSumAggregateInputType
    _min?: RuleMinAggregateInputType
    _max?: RuleMaxAggregateInputType
  }

  export type RuleGroupByOutputType = {
    id: number
    regras: JsonValue
    _count: RuleCountAggregateOutputType | null
    _avg: RuleAvgAggregateOutputType | null
    _sum: RuleSumAggregateOutputType | null
    _min: RuleMinAggregateOutputType | null
    _max: RuleMaxAggregateOutputType | null
  }

  type GetRuleGroupByPayload<T extends ruleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RuleGroupByOutputType[P]>
            : GetScalarType<T[P], RuleGroupByOutputType[P]>
        }
      >
    >


  export type ruleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    regras?: boolean
    field?: boolean | rule$fieldArgs<ExtArgs>
  }, ExtArgs["result"]["rule"]>

  export type ruleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    regras?: boolean
  }, ExtArgs["result"]["rule"]>

  export type ruleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    regras?: boolean
  }, ExtArgs["result"]["rule"]>

  export type ruleSelectScalar = {
    id?: boolean
    regras?: boolean
  }

  export type ruleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "regras", ExtArgs["result"]["rule"]>
  export type ruleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | rule$fieldArgs<ExtArgs>
  }
  export type ruleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ruleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rule"
    objects: {
      field: Prisma.$fieldPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      regras: Prisma.JsonValue
    }, ExtArgs["result"]["rule"]>
    composites: {}
  }

  type ruleGetPayload<S extends boolean | null | undefined | ruleDefaultArgs> = $Result.GetResult<Prisma.$rulePayload, S>

  type ruleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ruleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RuleCountAggregateInputType | true
    }

  export interface ruleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rule'], meta: { name: 'rule' } }
    /**
     * Find zero or one Rule that matches the filter.
     * @param {ruleFindUniqueArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ruleFindUniqueArgs>(args: SelectSubset<T, ruleFindUniqueArgs<ExtArgs>>): Prisma__ruleClient<$Result.GetResult<Prisma.$rulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ruleFindUniqueOrThrowArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ruleFindUniqueOrThrowArgs>(args: SelectSubset<T, ruleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ruleClient<$Result.GetResult<Prisma.$rulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ruleFindFirstArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ruleFindFirstArgs>(args?: SelectSubset<T, ruleFindFirstArgs<ExtArgs>>): Prisma__ruleClient<$Result.GetResult<Prisma.$rulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ruleFindFirstOrThrowArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ruleFindFirstOrThrowArgs>(args?: SelectSubset<T, ruleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ruleClient<$Result.GetResult<Prisma.$rulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ruleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rules
     * const rules = await prisma.rule.findMany()
     * 
     * // Get first 10 Rules
     * const rules = await prisma.rule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ruleWithIdOnly = await prisma.rule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ruleFindManyArgs>(args?: SelectSubset<T, ruleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rule.
     * @param {ruleCreateArgs} args - Arguments to create a Rule.
     * @example
     * // Create one Rule
     * const Rule = await prisma.rule.create({
     *   data: {
     *     // ... data to create a Rule
     *   }
     * })
     * 
     */
    create<T extends ruleCreateArgs>(args: SelectSubset<T, ruleCreateArgs<ExtArgs>>): Prisma__ruleClient<$Result.GetResult<Prisma.$rulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rules.
     * @param {ruleCreateManyArgs} args - Arguments to create many Rules.
     * @example
     * // Create many Rules
     * const rule = await prisma.rule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ruleCreateManyArgs>(args?: SelectSubset<T, ruleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rules and returns the data saved in the database.
     * @param {ruleCreateManyAndReturnArgs} args - Arguments to create many Rules.
     * @example
     * // Create many Rules
     * const rule = await prisma.rule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rules and only return the `id`
     * const ruleWithIdOnly = await prisma.rule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ruleCreateManyAndReturnArgs>(args?: SelectSubset<T, ruleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rule.
     * @param {ruleDeleteArgs} args - Arguments to delete one Rule.
     * @example
     * // Delete one Rule
     * const Rule = await prisma.rule.delete({
     *   where: {
     *     // ... filter to delete one Rule
     *   }
     * })
     * 
     */
    delete<T extends ruleDeleteArgs>(args: SelectSubset<T, ruleDeleteArgs<ExtArgs>>): Prisma__ruleClient<$Result.GetResult<Prisma.$rulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rule.
     * @param {ruleUpdateArgs} args - Arguments to update one Rule.
     * @example
     * // Update one Rule
     * const rule = await prisma.rule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ruleUpdateArgs>(args: SelectSubset<T, ruleUpdateArgs<ExtArgs>>): Prisma__ruleClient<$Result.GetResult<Prisma.$rulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rules.
     * @param {ruleDeleteManyArgs} args - Arguments to filter Rules to delete.
     * @example
     * // Delete a few Rules
     * const { count } = await prisma.rule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ruleDeleteManyArgs>(args?: SelectSubset<T, ruleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ruleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rules
     * const rule = await prisma.rule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ruleUpdateManyArgs>(args: SelectSubset<T, ruleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rules and returns the data updated in the database.
     * @param {ruleUpdateManyAndReturnArgs} args - Arguments to update many Rules.
     * @example
     * // Update many Rules
     * const rule = await prisma.rule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rules and only return the `id`
     * const ruleWithIdOnly = await prisma.rule.updateManyAndReturn({
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
    updateManyAndReturn<T extends ruleUpdateManyAndReturnArgs>(args: SelectSubset<T, ruleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rule.
     * @param {ruleUpsertArgs} args - Arguments to update or create a Rule.
     * @example
     * // Update or create a Rule
     * const rule = await prisma.rule.upsert({
     *   create: {
     *     // ... data to create a Rule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rule we want to update
     *   }
     * })
     */
    upsert<T extends ruleUpsertArgs>(args: SelectSubset<T, ruleUpsertArgs<ExtArgs>>): Prisma__ruleClient<$Result.GetResult<Prisma.$rulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ruleCountArgs} args - Arguments to filter Rules to count.
     * @example
     * // Count the number of Rules
     * const count = await prisma.rule.count({
     *   where: {
     *     // ... the filter for the Rules we want to count
     *   }
     * })
    **/
    count<T extends ruleCountArgs>(
      args?: Subset<T, ruleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RuleAggregateArgs>(args: Subset<T, RuleAggregateArgs>): Prisma.PrismaPromise<GetRuleAggregateType<T>>

    /**
     * Group by Rule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ruleGroupByArgs} args - Group by arguments.
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
      T extends ruleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ruleGroupByArgs['orderBy'] }
        : { orderBy?: ruleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ruleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rule model
   */
  readonly fields: ruleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ruleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    field<T extends rule$fieldArgs<ExtArgs> = {}>(args?: Subset<T, rule$fieldArgs<ExtArgs>>): Prisma__fieldClient<$Result.GetResult<Prisma.$fieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the rule model
   */
  interface ruleFieldRefs {
    readonly id: FieldRef<"rule", 'Int'>
    readonly regras: FieldRef<"rule", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * rule findUnique
   */
  export type ruleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rule
     */
    select?: ruleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rule
     */
    omit?: ruleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ruleInclude<ExtArgs> | null
    /**
     * Filter, which rule to fetch.
     */
    where: ruleWhereUniqueInput
  }

  /**
   * rule findUniqueOrThrow
   */
  export type ruleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rule
     */
    select?: ruleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rule
     */
    omit?: ruleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ruleInclude<ExtArgs> | null
    /**
     * Filter, which rule to fetch.
     */
    where: ruleWhereUniqueInput
  }

  /**
   * rule findFirst
   */
  export type ruleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rule
     */
    select?: ruleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rule
     */
    omit?: ruleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ruleInclude<ExtArgs> | null
    /**
     * Filter, which rule to fetch.
     */
    where?: ruleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rules to fetch.
     */
    orderBy?: ruleOrderByWithRelationInput | ruleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rules.
     */
    cursor?: ruleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rules.
     */
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * rule findFirstOrThrow
   */
  export type ruleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rule
     */
    select?: ruleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rule
     */
    omit?: ruleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ruleInclude<ExtArgs> | null
    /**
     * Filter, which rule to fetch.
     */
    where?: ruleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rules to fetch.
     */
    orderBy?: ruleOrderByWithRelationInput | ruleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rules.
     */
    cursor?: ruleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rules.
     */
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * rule findMany
   */
  export type ruleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rule
     */
    select?: ruleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rule
     */
    omit?: ruleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ruleInclude<ExtArgs> | null
    /**
     * Filter, which rules to fetch.
     */
    where?: ruleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rules to fetch.
     */
    orderBy?: ruleOrderByWithRelationInput | ruleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rules.
     */
    cursor?: ruleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rules.
     */
    skip?: number
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * rule create
   */
  export type ruleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rule
     */
    select?: ruleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rule
     */
    omit?: ruleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ruleInclude<ExtArgs> | null
    /**
     * The data needed to create a rule.
     */
    data: XOR<ruleCreateInput, ruleUncheckedCreateInput>
  }

  /**
   * rule createMany
   */
  export type ruleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rules.
     */
    data: ruleCreateManyInput | ruleCreateManyInput[]
  }

  /**
   * rule createManyAndReturn
   */
  export type ruleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rule
     */
    select?: ruleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rule
     */
    omit?: ruleOmit<ExtArgs> | null
    /**
     * The data used to create many rules.
     */
    data: ruleCreateManyInput | ruleCreateManyInput[]
  }

  /**
   * rule update
   */
  export type ruleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rule
     */
    select?: ruleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rule
     */
    omit?: ruleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ruleInclude<ExtArgs> | null
    /**
     * The data needed to update a rule.
     */
    data: XOR<ruleUpdateInput, ruleUncheckedUpdateInput>
    /**
     * Choose, which rule to update.
     */
    where: ruleWhereUniqueInput
  }

  /**
   * rule updateMany
   */
  export type ruleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rules.
     */
    data: XOR<ruleUpdateManyMutationInput, ruleUncheckedUpdateManyInput>
    /**
     * Filter which rules to update
     */
    where?: ruleWhereInput
    /**
     * Limit how many rules to update.
     */
    limit?: number
  }

  /**
   * rule updateManyAndReturn
   */
  export type ruleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rule
     */
    select?: ruleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rule
     */
    omit?: ruleOmit<ExtArgs> | null
    /**
     * The data used to update rules.
     */
    data: XOR<ruleUpdateManyMutationInput, ruleUncheckedUpdateManyInput>
    /**
     * Filter which rules to update
     */
    where?: ruleWhereInput
    /**
     * Limit how many rules to update.
     */
    limit?: number
  }

  /**
   * rule upsert
   */
  export type ruleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rule
     */
    select?: ruleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rule
     */
    omit?: ruleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ruleInclude<ExtArgs> | null
    /**
     * The filter to search for the rule to update in case it exists.
     */
    where: ruleWhereUniqueInput
    /**
     * In case the rule found by the `where` argument doesn't exist, create a new rule with this data.
     */
    create: XOR<ruleCreateInput, ruleUncheckedCreateInput>
    /**
     * In case the rule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ruleUpdateInput, ruleUncheckedUpdateInput>
  }

  /**
   * rule delete
   */
  export type ruleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rule
     */
    select?: ruleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rule
     */
    omit?: ruleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ruleInclude<ExtArgs> | null
    /**
     * Filter which rule to delete.
     */
    where: ruleWhereUniqueInput
  }

  /**
   * rule deleteMany
   */
  export type ruleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rules to delete
     */
    where?: ruleWhereInput
    /**
     * Limit how many rules to delete.
     */
    limit?: number
  }

  /**
   * rule.field
   */
  export type rule$fieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the field
     */
    select?: fieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the field
     */
    omit?: fieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldInclude<ExtArgs> | null
    where?: fieldWhereInput
  }

  /**
   * rule without action
   */
  export type ruleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rule
     */
    select?: ruleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rule
     */
    omit?: ruleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ruleInclude<ExtArgs> | null
  }


  /**
   * Model categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categoria to aggregate.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type categoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriaWhereInput
    orderBy?: categoriaOrderByWithAggregationInput | categoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: categoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nome: string
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends categoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type categoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    adrs?: boolean | categoria$adrsArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type categoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type categoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type categoriaSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type categoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["categoria"]>
  export type categoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adrs?: boolean | categoria$adrsArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categoria"
    objects: {
      adrs: Prisma.$adrPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type categoriaGetPayload<S extends boolean | null | undefined | categoriaDefaultArgs> = $Result.GetResult<Prisma.$categoriaPayload, S>

  type categoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface categoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categoria'], meta: { name: 'categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {categoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriaFindUniqueArgs>(args: SelectSubset<T, categoriaFindUniqueArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriaFindFirstArgs>(args?: SelectSubset<T, categoriaFindFirstArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriaFindManyArgs>(args?: SelectSubset<T, categoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {categoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends categoriaCreateArgs>(args: SelectSubset<T, categoriaCreateArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {categoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriaCreateManyArgs>(args?: SelectSubset<T, categoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {categoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {categoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends categoriaDeleteArgs>(args: SelectSubset<T, categoriaDeleteArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {categoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriaUpdateArgs>(args: SelectSubset<T, categoriaUpdateArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {categoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriaDeleteManyArgs>(args?: SelectSubset<T, categoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriaUpdateManyArgs>(args: SelectSubset<T, categoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {categoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
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
    updateManyAndReturn<T extends categoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {categoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends categoriaUpsertArgs>(args: SelectSubset<T, categoriaUpsertArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriaCountArgs>(
      args?: Subset<T, categoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaGroupByArgs} args - Group by arguments.
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
      T extends categoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriaGroupByArgs['orderBy'] }
        : { orderBy?: categoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categoria model
   */
  readonly fields: categoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adrs<T extends categoria$adrsArgs<ExtArgs> = {}>(args?: Subset<T, categoria$adrsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adrPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categoria model
   */
  interface categoriaFieldRefs {
    readonly id: FieldRef<"categoria", 'Int'>
    readonly nome: FieldRef<"categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categoria findUnique
   */
  export type categoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria findUniqueOrThrow
   */
  export type categoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria findFirst
   */
  export type categoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria findFirstOrThrow
   */
  export type categoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria findMany
   */
  export type categoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria create
   */
  export type categoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a categoria.
     */
    data: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
  }

  /**
   * categoria createMany
   */
  export type categoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: categoriaCreateManyInput | categoriaCreateManyInput[]
  }

  /**
   * categoria createManyAndReturn
   */
  export type categoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * The data used to create many categorias.
     */
    data: categoriaCreateManyInput | categoriaCreateManyInput[]
  }

  /**
   * categoria update
   */
  export type categoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a categoria.
     */
    data: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
    /**
     * Choose, which categoria to update.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria updateMany
   */
  export type categoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriaUpdateManyMutationInput, categoriaUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriaWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categoria updateManyAndReturn
   */
  export type categoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriaUpdateManyMutationInput, categoriaUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriaWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categoria upsert
   */
  export type categoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the categoria to update in case it exists.
     */
    where: categoriaWhereUniqueInput
    /**
     * In case the categoria found by the `where` argument doesn't exist, create a new categoria with this data.
     */
    create: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
    /**
     * In case the categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
  }

  /**
   * categoria delete
   */
  export type categoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter which categoria to delete.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria deleteMany
   */
  export type categoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriaWhereInput
    /**
     * Limit how many categorias to delete.
     */
    limit?: number
  }

  /**
   * categoria.adrs
   */
  export type categoria$adrsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adr
     */
    select?: adrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adr
     */
    omit?: adrOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adrInclude<ExtArgs> | null
    where?: adrWhereInput
    orderBy?: adrOrderByWithRelationInput | adrOrderByWithRelationInput[]
    cursor?: adrWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdrScalarFieldEnum | AdrScalarFieldEnum[]
  }

  /**
   * categoria without action
   */
  export type categoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdrScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    templateId: 'templateId',
    substituido: 'substituido',
    substituidoPor: 'substituidoPor',
    valido: 'valido'
  };

  export type AdrScalarFieldEnum = (typeof AdrScalarFieldEnum)[keyof typeof AdrScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    fieldId: 'fieldId'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const FieldScalarFieldEnum: {
    id: 'id',
    campos: 'campos',
    ruleId: 'ruleId'
  };

  export type FieldScalarFieldEnum = (typeof FieldScalarFieldEnum)[keyof typeof FieldScalarFieldEnum]


  export const RuleScalarFieldEnum: {
    id: 'id',
    regras: 'regras'
  };

  export type RuleScalarFieldEnum = (typeof RuleScalarFieldEnum)[keyof typeof RuleScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type adrWhereInput = {
    AND?: adrWhereInput | adrWhereInput[]
    OR?: adrWhereInput[]
    NOT?: adrWhereInput | adrWhereInput[]
    id?: IntFilter<"adr"> | number
    nome?: StringFilter<"adr"> | string
    templateId?: IntFilter<"adr"> | number
    substituido?: BoolFilter<"adr"> | boolean
    substituidoPor?: IntNullableFilter<"adr"> | number | null
    valido?: BoolFilter<"adr"> | boolean
    categorias?: CategoriaListRelationFilter
    template?: XOR<TemplateScalarRelationFilter, templateWhereInput>
  }

  export type adrOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    templateId?: SortOrder
    substituido?: SortOrder
    substituidoPor?: SortOrderInput | SortOrder
    valido?: SortOrder
    categorias?: categoriaOrderByRelationAggregateInput
    template?: templateOrderByWithRelationInput
  }

  export type adrWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: adrWhereInput | adrWhereInput[]
    OR?: adrWhereInput[]
    NOT?: adrWhereInput | adrWhereInput[]
    nome?: StringFilter<"adr"> | string
    templateId?: IntFilter<"adr"> | number
    substituido?: BoolFilter<"adr"> | boolean
    substituidoPor?: IntNullableFilter<"adr"> | number | null
    valido?: BoolFilter<"adr"> | boolean
    categorias?: CategoriaListRelationFilter
    template?: XOR<TemplateScalarRelationFilter, templateWhereInput>
  }, "id">

  export type adrOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    templateId?: SortOrder
    substituido?: SortOrder
    substituidoPor?: SortOrderInput | SortOrder
    valido?: SortOrder
    _count?: adrCountOrderByAggregateInput
    _avg?: adrAvgOrderByAggregateInput
    _max?: adrMaxOrderByAggregateInput
    _min?: adrMinOrderByAggregateInput
    _sum?: adrSumOrderByAggregateInput
  }

  export type adrScalarWhereWithAggregatesInput = {
    AND?: adrScalarWhereWithAggregatesInput | adrScalarWhereWithAggregatesInput[]
    OR?: adrScalarWhereWithAggregatesInput[]
    NOT?: adrScalarWhereWithAggregatesInput | adrScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"adr"> | number
    nome?: StringWithAggregatesFilter<"adr"> | string
    templateId?: IntWithAggregatesFilter<"adr"> | number
    substituido?: BoolWithAggregatesFilter<"adr"> | boolean
    substituidoPor?: IntNullableWithAggregatesFilter<"adr"> | number | null
    valido?: BoolWithAggregatesFilter<"adr"> | boolean
  }

  export type templateWhereInput = {
    AND?: templateWhereInput | templateWhereInput[]
    OR?: templateWhereInput[]
    NOT?: templateWhereInput | templateWhereInput[]
    id?: IntFilter<"template"> | number
    nome?: StringFilter<"template"> | string
    fieldId?: IntFilter<"template"> | number
    field?: XOR<FieldScalarRelationFilter, fieldWhereInput>
    adrs?: AdrListRelationFilter
  }

  export type templateOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    fieldId?: SortOrder
    field?: fieldOrderByWithRelationInput
    adrs?: adrOrderByRelationAggregateInput
  }

  export type templateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fieldId?: number
    AND?: templateWhereInput | templateWhereInput[]
    OR?: templateWhereInput[]
    NOT?: templateWhereInput | templateWhereInput[]
    nome?: StringFilter<"template"> | string
    field?: XOR<FieldScalarRelationFilter, fieldWhereInput>
    adrs?: AdrListRelationFilter
  }, "id" | "fieldId">

  export type templateOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    fieldId?: SortOrder
    _count?: templateCountOrderByAggregateInput
    _avg?: templateAvgOrderByAggregateInput
    _max?: templateMaxOrderByAggregateInput
    _min?: templateMinOrderByAggregateInput
    _sum?: templateSumOrderByAggregateInput
  }

  export type templateScalarWhereWithAggregatesInput = {
    AND?: templateScalarWhereWithAggregatesInput | templateScalarWhereWithAggregatesInput[]
    OR?: templateScalarWhereWithAggregatesInput[]
    NOT?: templateScalarWhereWithAggregatesInput | templateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"template"> | number
    nome?: StringWithAggregatesFilter<"template"> | string
    fieldId?: IntWithAggregatesFilter<"template"> | number
  }

  export type fieldWhereInput = {
    AND?: fieldWhereInput | fieldWhereInput[]
    OR?: fieldWhereInput[]
    NOT?: fieldWhereInput | fieldWhereInput[]
    id?: IntFilter<"field"> | number
    campos?: JsonFilter<"field">
    ruleId?: IntFilter<"field"> | number
    rule?: XOR<RuleScalarRelationFilter, ruleWhereInput>
    template?: XOR<TemplateNullableScalarRelationFilter, templateWhereInput> | null
  }

  export type fieldOrderByWithRelationInput = {
    id?: SortOrder
    campos?: SortOrder
    ruleId?: SortOrder
    rule?: ruleOrderByWithRelationInput
    template?: templateOrderByWithRelationInput
  }

  export type fieldWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ruleId?: number
    AND?: fieldWhereInput | fieldWhereInput[]
    OR?: fieldWhereInput[]
    NOT?: fieldWhereInput | fieldWhereInput[]
    campos?: JsonFilter<"field">
    rule?: XOR<RuleScalarRelationFilter, ruleWhereInput>
    template?: XOR<TemplateNullableScalarRelationFilter, templateWhereInput> | null
  }, "id" | "ruleId">

  export type fieldOrderByWithAggregationInput = {
    id?: SortOrder
    campos?: SortOrder
    ruleId?: SortOrder
    _count?: fieldCountOrderByAggregateInput
    _avg?: fieldAvgOrderByAggregateInput
    _max?: fieldMaxOrderByAggregateInput
    _min?: fieldMinOrderByAggregateInput
    _sum?: fieldSumOrderByAggregateInput
  }

  export type fieldScalarWhereWithAggregatesInput = {
    AND?: fieldScalarWhereWithAggregatesInput | fieldScalarWhereWithAggregatesInput[]
    OR?: fieldScalarWhereWithAggregatesInput[]
    NOT?: fieldScalarWhereWithAggregatesInput | fieldScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"field"> | number
    campos?: JsonWithAggregatesFilter<"field">
    ruleId?: IntWithAggregatesFilter<"field"> | number
  }

  export type ruleWhereInput = {
    AND?: ruleWhereInput | ruleWhereInput[]
    OR?: ruleWhereInput[]
    NOT?: ruleWhereInput | ruleWhereInput[]
    id?: IntFilter<"rule"> | number
    regras?: JsonFilter<"rule">
    field?: XOR<FieldNullableScalarRelationFilter, fieldWhereInput> | null
  }

  export type ruleOrderByWithRelationInput = {
    id?: SortOrder
    regras?: SortOrder
    field?: fieldOrderByWithRelationInput
  }

  export type ruleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ruleWhereInput | ruleWhereInput[]
    OR?: ruleWhereInput[]
    NOT?: ruleWhereInput | ruleWhereInput[]
    regras?: JsonFilter<"rule">
    field?: XOR<FieldNullableScalarRelationFilter, fieldWhereInput> | null
  }, "id">

  export type ruleOrderByWithAggregationInput = {
    id?: SortOrder
    regras?: SortOrder
    _count?: ruleCountOrderByAggregateInput
    _avg?: ruleAvgOrderByAggregateInput
    _max?: ruleMaxOrderByAggregateInput
    _min?: ruleMinOrderByAggregateInput
    _sum?: ruleSumOrderByAggregateInput
  }

  export type ruleScalarWhereWithAggregatesInput = {
    AND?: ruleScalarWhereWithAggregatesInput | ruleScalarWhereWithAggregatesInput[]
    OR?: ruleScalarWhereWithAggregatesInput[]
    NOT?: ruleScalarWhereWithAggregatesInput | ruleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rule"> | number
    regras?: JsonWithAggregatesFilter<"rule">
  }

  export type categoriaWhereInput = {
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    id?: IntFilter<"categoria"> | number
    nome?: StringFilter<"categoria"> | string
    adrs?: AdrListRelationFilter
  }

  export type categoriaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    adrs?: adrOrderByRelationAggregateInput
  }

  export type categoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    nome?: StringFilter<"categoria"> | string
    adrs?: AdrListRelationFilter
  }, "id">

  export type categoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: categoriaCountOrderByAggregateInput
    _avg?: categoriaAvgOrderByAggregateInput
    _max?: categoriaMaxOrderByAggregateInput
    _min?: categoriaMinOrderByAggregateInput
    _sum?: categoriaSumOrderByAggregateInput
  }

  export type categoriaScalarWhereWithAggregatesInput = {
    AND?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    OR?: categoriaScalarWhereWithAggregatesInput[]
    NOT?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categoria"> | number
    nome?: StringWithAggregatesFilter<"categoria"> | string
  }

  export type adrCreateInput = {
    id: number
    nome: string
    substituido?: boolean
    substituidoPor?: number | null
    valido?: boolean
    categorias?: categoriaCreateNestedManyWithoutAdrsInput
    template: templateCreateNestedOneWithoutAdrsInput
  }

  export type adrUncheckedCreateInput = {
    id: number
    nome: string
    templateId: number
    substituido?: boolean
    substituidoPor?: number | null
    valido?: boolean
    categorias?: categoriaUncheckedCreateNestedManyWithoutAdrsInput
  }

  export type adrUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    substituido?: BoolFieldUpdateOperationsInput | boolean
    substituidoPor?: NullableIntFieldUpdateOperationsInput | number | null
    valido?: BoolFieldUpdateOperationsInput | boolean
    categorias?: categoriaUpdateManyWithoutAdrsNestedInput
    template?: templateUpdateOneRequiredWithoutAdrsNestedInput
  }

  export type adrUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    templateId?: IntFieldUpdateOperationsInput | number
    substituido?: BoolFieldUpdateOperationsInput | boolean
    substituidoPor?: NullableIntFieldUpdateOperationsInput | number | null
    valido?: BoolFieldUpdateOperationsInput | boolean
    categorias?: categoriaUncheckedUpdateManyWithoutAdrsNestedInput
  }

  export type adrCreateManyInput = {
    id: number
    nome: string
    templateId: number
    substituido?: boolean
    substituidoPor?: number | null
    valido?: boolean
  }

  export type adrUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    substituido?: BoolFieldUpdateOperationsInput | boolean
    substituidoPor?: NullableIntFieldUpdateOperationsInput | number | null
    valido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type adrUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    templateId?: IntFieldUpdateOperationsInput | number
    substituido?: BoolFieldUpdateOperationsInput | boolean
    substituidoPor?: NullableIntFieldUpdateOperationsInput | number | null
    valido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type templateCreateInput = {
    nome: string
    field: fieldCreateNestedOneWithoutTemplateInput
    adrs?: adrCreateNestedManyWithoutTemplateInput
  }

  export type templateUncheckedCreateInput = {
    id?: number
    nome: string
    fieldId: number
    adrs?: adrUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type templateUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    field?: fieldUpdateOneRequiredWithoutTemplateNestedInput
    adrs?: adrUpdateManyWithoutTemplateNestedInput
  }

  export type templateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    fieldId?: IntFieldUpdateOperationsInput | number
    adrs?: adrUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type templateCreateManyInput = {
    id?: number
    nome: string
    fieldId: number
  }

  export type templateUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type templateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    fieldId?: IntFieldUpdateOperationsInput | number
  }

  export type fieldCreateInput = {
    campos: JsonNullValueInput | InputJsonValue
    rule: ruleCreateNestedOneWithoutFieldInput
    template?: templateCreateNestedOneWithoutFieldInput
  }

  export type fieldUncheckedCreateInput = {
    id?: number
    campos: JsonNullValueInput | InputJsonValue
    ruleId: number
    template?: templateUncheckedCreateNestedOneWithoutFieldInput
  }

  export type fieldUpdateInput = {
    campos?: JsonNullValueInput | InputJsonValue
    rule?: ruleUpdateOneRequiredWithoutFieldNestedInput
    template?: templateUpdateOneWithoutFieldNestedInput
  }

  export type fieldUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    campos?: JsonNullValueInput | InputJsonValue
    ruleId?: IntFieldUpdateOperationsInput | number
    template?: templateUncheckedUpdateOneWithoutFieldNestedInput
  }

  export type fieldCreateManyInput = {
    id?: number
    campos: JsonNullValueInput | InputJsonValue
    ruleId: number
  }

  export type fieldUpdateManyMutationInput = {
    campos?: JsonNullValueInput | InputJsonValue
  }

  export type fieldUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    campos?: JsonNullValueInput | InputJsonValue
    ruleId?: IntFieldUpdateOperationsInput | number
  }

  export type ruleCreateInput = {
    regras: JsonNullValueInput | InputJsonValue
    field?: fieldCreateNestedOneWithoutRuleInput
  }

  export type ruleUncheckedCreateInput = {
    id?: number
    regras: JsonNullValueInput | InputJsonValue
    field?: fieldUncheckedCreateNestedOneWithoutRuleInput
  }

  export type ruleUpdateInput = {
    regras?: JsonNullValueInput | InputJsonValue
    field?: fieldUpdateOneWithoutRuleNestedInput
  }

  export type ruleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    regras?: JsonNullValueInput | InputJsonValue
    field?: fieldUncheckedUpdateOneWithoutRuleNestedInput
  }

  export type ruleCreateManyInput = {
    id?: number
    regras: JsonNullValueInput | InputJsonValue
  }

  export type ruleUpdateManyMutationInput = {
    regras?: JsonNullValueInput | InputJsonValue
  }

  export type ruleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    regras?: JsonNullValueInput | InputJsonValue
  }

  export type categoriaCreateInput = {
    nome: string
    adrs?: adrCreateNestedManyWithoutCategoriasInput
  }

  export type categoriaUncheckedCreateInput = {
    id?: number
    nome: string
    adrs?: adrUncheckedCreateNestedManyWithoutCategoriasInput
  }

  export type categoriaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    adrs?: adrUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    adrs?: adrUncheckedUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriaCreateManyInput = {
    id?: number
    nome: string
  }

  export type categoriaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type categoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type CategoriaListRelationFilter = {
    every?: categoriaWhereInput
    some?: categoriaWhereInput
    none?: categoriaWhereInput
  }

  export type TemplateScalarRelationFilter = {
    is?: templateWhereInput
    isNot?: templateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type categoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type adrCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    templateId?: SortOrder
    substituido?: SortOrder
    substituidoPor?: SortOrder
    valido?: SortOrder
  }

  export type adrAvgOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    substituidoPor?: SortOrder
  }

  export type adrMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    templateId?: SortOrder
    substituido?: SortOrder
    substituidoPor?: SortOrder
    valido?: SortOrder
  }

  export type adrMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    templateId?: SortOrder
    substituido?: SortOrder
    substituidoPor?: SortOrder
    valido?: SortOrder
  }

  export type adrSumOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    substituidoPor?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FieldScalarRelationFilter = {
    is?: fieldWhereInput
    isNot?: fieldWhereInput
  }

  export type AdrListRelationFilter = {
    every?: adrWhereInput
    some?: adrWhereInput
    none?: adrWhereInput
  }

  export type adrOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type templateCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    fieldId?: SortOrder
  }

  export type templateAvgOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
  }

  export type templateMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    fieldId?: SortOrder
  }

  export type templateMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    fieldId?: SortOrder
  }

  export type templateSumOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RuleScalarRelationFilter = {
    is?: ruleWhereInput
    isNot?: ruleWhereInput
  }

  export type TemplateNullableScalarRelationFilter = {
    is?: templateWhereInput | null
    isNot?: templateWhereInput | null
  }

  export type fieldCountOrderByAggregateInput = {
    id?: SortOrder
    campos?: SortOrder
    ruleId?: SortOrder
  }

  export type fieldAvgOrderByAggregateInput = {
    id?: SortOrder
    ruleId?: SortOrder
  }

  export type fieldMaxOrderByAggregateInput = {
    id?: SortOrder
    ruleId?: SortOrder
  }

  export type fieldMinOrderByAggregateInput = {
    id?: SortOrder
    ruleId?: SortOrder
  }

  export type fieldSumOrderByAggregateInput = {
    id?: SortOrder
    ruleId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FieldNullableScalarRelationFilter = {
    is?: fieldWhereInput | null
    isNot?: fieldWhereInput | null
  }

  export type ruleCountOrderByAggregateInput = {
    id?: SortOrder
    regras?: SortOrder
  }

  export type ruleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ruleMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ruleMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ruleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type categoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type categoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type categoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriaCreateNestedManyWithoutAdrsInput = {
    create?: XOR<categoriaCreateWithoutAdrsInput, categoriaUncheckedCreateWithoutAdrsInput> | categoriaCreateWithoutAdrsInput[] | categoriaUncheckedCreateWithoutAdrsInput[]
    connectOrCreate?: categoriaCreateOrConnectWithoutAdrsInput | categoriaCreateOrConnectWithoutAdrsInput[]
    connect?: categoriaWhereUniqueInput | categoriaWhereUniqueInput[]
  }

  export type templateCreateNestedOneWithoutAdrsInput = {
    create?: XOR<templateCreateWithoutAdrsInput, templateUncheckedCreateWithoutAdrsInput>
    connectOrCreate?: templateCreateOrConnectWithoutAdrsInput
    connect?: templateWhereUniqueInput
  }

  export type categoriaUncheckedCreateNestedManyWithoutAdrsInput = {
    create?: XOR<categoriaCreateWithoutAdrsInput, categoriaUncheckedCreateWithoutAdrsInput> | categoriaCreateWithoutAdrsInput[] | categoriaUncheckedCreateWithoutAdrsInput[]
    connectOrCreate?: categoriaCreateOrConnectWithoutAdrsInput | categoriaCreateOrConnectWithoutAdrsInput[]
    connect?: categoriaWhereUniqueInput | categoriaWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type categoriaUpdateManyWithoutAdrsNestedInput = {
    create?: XOR<categoriaCreateWithoutAdrsInput, categoriaUncheckedCreateWithoutAdrsInput> | categoriaCreateWithoutAdrsInput[] | categoriaUncheckedCreateWithoutAdrsInput[]
    connectOrCreate?: categoriaCreateOrConnectWithoutAdrsInput | categoriaCreateOrConnectWithoutAdrsInput[]
    upsert?: categoriaUpsertWithWhereUniqueWithoutAdrsInput | categoriaUpsertWithWhereUniqueWithoutAdrsInput[]
    set?: categoriaWhereUniqueInput | categoriaWhereUniqueInput[]
    disconnect?: categoriaWhereUniqueInput | categoriaWhereUniqueInput[]
    delete?: categoriaWhereUniqueInput | categoriaWhereUniqueInput[]
    connect?: categoriaWhereUniqueInput | categoriaWhereUniqueInput[]
    update?: categoriaUpdateWithWhereUniqueWithoutAdrsInput | categoriaUpdateWithWhereUniqueWithoutAdrsInput[]
    updateMany?: categoriaUpdateManyWithWhereWithoutAdrsInput | categoriaUpdateManyWithWhereWithoutAdrsInput[]
    deleteMany?: categoriaScalarWhereInput | categoriaScalarWhereInput[]
  }

  export type templateUpdateOneRequiredWithoutAdrsNestedInput = {
    create?: XOR<templateCreateWithoutAdrsInput, templateUncheckedCreateWithoutAdrsInput>
    connectOrCreate?: templateCreateOrConnectWithoutAdrsInput
    upsert?: templateUpsertWithoutAdrsInput
    connect?: templateWhereUniqueInput
    update?: XOR<XOR<templateUpdateToOneWithWhereWithoutAdrsInput, templateUpdateWithoutAdrsInput>, templateUncheckedUpdateWithoutAdrsInput>
  }

  export type categoriaUncheckedUpdateManyWithoutAdrsNestedInput = {
    create?: XOR<categoriaCreateWithoutAdrsInput, categoriaUncheckedCreateWithoutAdrsInput> | categoriaCreateWithoutAdrsInput[] | categoriaUncheckedCreateWithoutAdrsInput[]
    connectOrCreate?: categoriaCreateOrConnectWithoutAdrsInput | categoriaCreateOrConnectWithoutAdrsInput[]
    upsert?: categoriaUpsertWithWhereUniqueWithoutAdrsInput | categoriaUpsertWithWhereUniqueWithoutAdrsInput[]
    set?: categoriaWhereUniqueInput | categoriaWhereUniqueInput[]
    disconnect?: categoriaWhereUniqueInput | categoriaWhereUniqueInput[]
    delete?: categoriaWhereUniqueInput | categoriaWhereUniqueInput[]
    connect?: categoriaWhereUniqueInput | categoriaWhereUniqueInput[]
    update?: categoriaUpdateWithWhereUniqueWithoutAdrsInput | categoriaUpdateWithWhereUniqueWithoutAdrsInput[]
    updateMany?: categoriaUpdateManyWithWhereWithoutAdrsInput | categoriaUpdateManyWithWhereWithoutAdrsInput[]
    deleteMany?: categoriaScalarWhereInput | categoriaScalarWhereInput[]
  }

  export type fieldCreateNestedOneWithoutTemplateInput = {
    create?: XOR<fieldCreateWithoutTemplateInput, fieldUncheckedCreateWithoutTemplateInput>
    connectOrCreate?: fieldCreateOrConnectWithoutTemplateInput
    connect?: fieldWhereUniqueInput
  }

  export type adrCreateNestedManyWithoutTemplateInput = {
    create?: XOR<adrCreateWithoutTemplateInput, adrUncheckedCreateWithoutTemplateInput> | adrCreateWithoutTemplateInput[] | adrUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: adrCreateOrConnectWithoutTemplateInput | adrCreateOrConnectWithoutTemplateInput[]
    createMany?: adrCreateManyTemplateInputEnvelope
    connect?: adrWhereUniqueInput | adrWhereUniqueInput[]
  }

  export type adrUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<adrCreateWithoutTemplateInput, adrUncheckedCreateWithoutTemplateInput> | adrCreateWithoutTemplateInput[] | adrUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: adrCreateOrConnectWithoutTemplateInput | adrCreateOrConnectWithoutTemplateInput[]
    createMany?: adrCreateManyTemplateInputEnvelope
    connect?: adrWhereUniqueInput | adrWhereUniqueInput[]
  }

  export type fieldUpdateOneRequiredWithoutTemplateNestedInput = {
    create?: XOR<fieldCreateWithoutTemplateInput, fieldUncheckedCreateWithoutTemplateInput>
    connectOrCreate?: fieldCreateOrConnectWithoutTemplateInput
    upsert?: fieldUpsertWithoutTemplateInput
    connect?: fieldWhereUniqueInput
    update?: XOR<XOR<fieldUpdateToOneWithWhereWithoutTemplateInput, fieldUpdateWithoutTemplateInput>, fieldUncheckedUpdateWithoutTemplateInput>
  }

  export type adrUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<adrCreateWithoutTemplateInput, adrUncheckedCreateWithoutTemplateInput> | adrCreateWithoutTemplateInput[] | adrUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: adrCreateOrConnectWithoutTemplateInput | adrCreateOrConnectWithoutTemplateInput[]
    upsert?: adrUpsertWithWhereUniqueWithoutTemplateInput | adrUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: adrCreateManyTemplateInputEnvelope
    set?: adrWhereUniqueInput | adrWhereUniqueInput[]
    disconnect?: adrWhereUniqueInput | adrWhereUniqueInput[]
    delete?: adrWhereUniqueInput | adrWhereUniqueInput[]
    connect?: adrWhereUniqueInput | adrWhereUniqueInput[]
    update?: adrUpdateWithWhereUniqueWithoutTemplateInput | adrUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: adrUpdateManyWithWhereWithoutTemplateInput | adrUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: adrScalarWhereInput | adrScalarWhereInput[]
  }

  export type adrUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<adrCreateWithoutTemplateInput, adrUncheckedCreateWithoutTemplateInput> | adrCreateWithoutTemplateInput[] | adrUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: adrCreateOrConnectWithoutTemplateInput | adrCreateOrConnectWithoutTemplateInput[]
    upsert?: adrUpsertWithWhereUniqueWithoutTemplateInput | adrUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: adrCreateManyTemplateInputEnvelope
    set?: adrWhereUniqueInput | adrWhereUniqueInput[]
    disconnect?: adrWhereUniqueInput | adrWhereUniqueInput[]
    delete?: adrWhereUniqueInput | adrWhereUniqueInput[]
    connect?: adrWhereUniqueInput | adrWhereUniqueInput[]
    update?: adrUpdateWithWhereUniqueWithoutTemplateInput | adrUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: adrUpdateManyWithWhereWithoutTemplateInput | adrUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: adrScalarWhereInput | adrScalarWhereInput[]
  }

  export type ruleCreateNestedOneWithoutFieldInput = {
    create?: XOR<ruleCreateWithoutFieldInput, ruleUncheckedCreateWithoutFieldInput>
    connectOrCreate?: ruleCreateOrConnectWithoutFieldInput
    connect?: ruleWhereUniqueInput
  }

  export type templateCreateNestedOneWithoutFieldInput = {
    create?: XOR<templateCreateWithoutFieldInput, templateUncheckedCreateWithoutFieldInput>
    connectOrCreate?: templateCreateOrConnectWithoutFieldInput
    connect?: templateWhereUniqueInput
  }

  export type templateUncheckedCreateNestedOneWithoutFieldInput = {
    create?: XOR<templateCreateWithoutFieldInput, templateUncheckedCreateWithoutFieldInput>
    connectOrCreate?: templateCreateOrConnectWithoutFieldInput
    connect?: templateWhereUniqueInput
  }

  export type ruleUpdateOneRequiredWithoutFieldNestedInput = {
    create?: XOR<ruleCreateWithoutFieldInput, ruleUncheckedCreateWithoutFieldInput>
    connectOrCreate?: ruleCreateOrConnectWithoutFieldInput
    upsert?: ruleUpsertWithoutFieldInput
    connect?: ruleWhereUniqueInput
    update?: XOR<XOR<ruleUpdateToOneWithWhereWithoutFieldInput, ruleUpdateWithoutFieldInput>, ruleUncheckedUpdateWithoutFieldInput>
  }

  export type templateUpdateOneWithoutFieldNestedInput = {
    create?: XOR<templateCreateWithoutFieldInput, templateUncheckedCreateWithoutFieldInput>
    connectOrCreate?: templateCreateOrConnectWithoutFieldInput
    upsert?: templateUpsertWithoutFieldInput
    disconnect?: templateWhereInput | boolean
    delete?: templateWhereInput | boolean
    connect?: templateWhereUniqueInput
    update?: XOR<XOR<templateUpdateToOneWithWhereWithoutFieldInput, templateUpdateWithoutFieldInput>, templateUncheckedUpdateWithoutFieldInput>
  }

  export type templateUncheckedUpdateOneWithoutFieldNestedInput = {
    create?: XOR<templateCreateWithoutFieldInput, templateUncheckedCreateWithoutFieldInput>
    connectOrCreate?: templateCreateOrConnectWithoutFieldInput
    upsert?: templateUpsertWithoutFieldInput
    disconnect?: templateWhereInput | boolean
    delete?: templateWhereInput | boolean
    connect?: templateWhereUniqueInput
    update?: XOR<XOR<templateUpdateToOneWithWhereWithoutFieldInput, templateUpdateWithoutFieldInput>, templateUncheckedUpdateWithoutFieldInput>
  }

  export type fieldCreateNestedOneWithoutRuleInput = {
    create?: XOR<fieldCreateWithoutRuleInput, fieldUncheckedCreateWithoutRuleInput>
    connectOrCreate?: fieldCreateOrConnectWithoutRuleInput
    connect?: fieldWhereUniqueInput
  }

  export type fieldUncheckedCreateNestedOneWithoutRuleInput = {
    create?: XOR<fieldCreateWithoutRuleInput, fieldUncheckedCreateWithoutRuleInput>
    connectOrCreate?: fieldCreateOrConnectWithoutRuleInput
    connect?: fieldWhereUniqueInput
  }

  export type fieldUpdateOneWithoutRuleNestedInput = {
    create?: XOR<fieldCreateWithoutRuleInput, fieldUncheckedCreateWithoutRuleInput>
    connectOrCreate?: fieldCreateOrConnectWithoutRuleInput
    upsert?: fieldUpsertWithoutRuleInput
    disconnect?: fieldWhereInput | boolean
    delete?: fieldWhereInput | boolean
    connect?: fieldWhereUniqueInput
    update?: XOR<XOR<fieldUpdateToOneWithWhereWithoutRuleInput, fieldUpdateWithoutRuleInput>, fieldUncheckedUpdateWithoutRuleInput>
  }

  export type fieldUncheckedUpdateOneWithoutRuleNestedInput = {
    create?: XOR<fieldCreateWithoutRuleInput, fieldUncheckedCreateWithoutRuleInput>
    connectOrCreate?: fieldCreateOrConnectWithoutRuleInput
    upsert?: fieldUpsertWithoutRuleInput
    disconnect?: fieldWhereInput | boolean
    delete?: fieldWhereInput | boolean
    connect?: fieldWhereUniqueInput
    update?: XOR<XOR<fieldUpdateToOneWithWhereWithoutRuleInput, fieldUpdateWithoutRuleInput>, fieldUncheckedUpdateWithoutRuleInput>
  }

  export type adrCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<adrCreateWithoutCategoriasInput, adrUncheckedCreateWithoutCategoriasInput> | adrCreateWithoutCategoriasInput[] | adrUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: adrCreateOrConnectWithoutCategoriasInput | adrCreateOrConnectWithoutCategoriasInput[]
    connect?: adrWhereUniqueInput | adrWhereUniqueInput[]
  }

  export type adrUncheckedCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<adrCreateWithoutCategoriasInput, adrUncheckedCreateWithoutCategoriasInput> | adrCreateWithoutCategoriasInput[] | adrUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: adrCreateOrConnectWithoutCategoriasInput | adrCreateOrConnectWithoutCategoriasInput[]
    connect?: adrWhereUniqueInput | adrWhereUniqueInput[]
  }

  export type adrUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<adrCreateWithoutCategoriasInput, adrUncheckedCreateWithoutCategoriasInput> | adrCreateWithoutCategoriasInput[] | adrUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: adrCreateOrConnectWithoutCategoriasInput | adrCreateOrConnectWithoutCategoriasInput[]
    upsert?: adrUpsertWithWhereUniqueWithoutCategoriasInput | adrUpsertWithWhereUniqueWithoutCategoriasInput[]
    set?: adrWhereUniqueInput | adrWhereUniqueInput[]
    disconnect?: adrWhereUniqueInput | adrWhereUniqueInput[]
    delete?: adrWhereUniqueInput | adrWhereUniqueInput[]
    connect?: adrWhereUniqueInput | adrWhereUniqueInput[]
    update?: adrUpdateWithWhereUniqueWithoutCategoriasInput | adrUpdateWithWhereUniqueWithoutCategoriasInput[]
    updateMany?: adrUpdateManyWithWhereWithoutCategoriasInput | adrUpdateManyWithWhereWithoutCategoriasInput[]
    deleteMany?: adrScalarWhereInput | adrScalarWhereInput[]
  }

  export type adrUncheckedUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<adrCreateWithoutCategoriasInput, adrUncheckedCreateWithoutCategoriasInput> | adrCreateWithoutCategoriasInput[] | adrUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: adrCreateOrConnectWithoutCategoriasInput | adrCreateOrConnectWithoutCategoriasInput[]
    upsert?: adrUpsertWithWhereUniqueWithoutCategoriasInput | adrUpsertWithWhereUniqueWithoutCategoriasInput[]
    set?: adrWhereUniqueInput | adrWhereUniqueInput[]
    disconnect?: adrWhereUniqueInput | adrWhereUniqueInput[]
    delete?: adrWhereUniqueInput | adrWhereUniqueInput[]
    connect?: adrWhereUniqueInput | adrWhereUniqueInput[]
    update?: adrUpdateWithWhereUniqueWithoutCategoriasInput | adrUpdateWithWhereUniqueWithoutCategoriasInput[]
    updateMany?: adrUpdateManyWithWhereWithoutCategoriasInput | adrUpdateManyWithWhereWithoutCategoriasInput[]
    deleteMany?: adrScalarWhereInput | adrScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type categoriaCreateWithoutAdrsInput = {
    nome: string
  }

  export type categoriaUncheckedCreateWithoutAdrsInput = {
    id?: number
    nome: string
  }

  export type categoriaCreateOrConnectWithoutAdrsInput = {
    where: categoriaWhereUniqueInput
    create: XOR<categoriaCreateWithoutAdrsInput, categoriaUncheckedCreateWithoutAdrsInput>
  }

  export type templateCreateWithoutAdrsInput = {
    nome: string
    field: fieldCreateNestedOneWithoutTemplateInput
  }

  export type templateUncheckedCreateWithoutAdrsInput = {
    id?: number
    nome: string
    fieldId: number
  }

  export type templateCreateOrConnectWithoutAdrsInput = {
    where: templateWhereUniqueInput
    create: XOR<templateCreateWithoutAdrsInput, templateUncheckedCreateWithoutAdrsInput>
  }

  export type categoriaUpsertWithWhereUniqueWithoutAdrsInput = {
    where: categoriaWhereUniqueInput
    update: XOR<categoriaUpdateWithoutAdrsInput, categoriaUncheckedUpdateWithoutAdrsInput>
    create: XOR<categoriaCreateWithoutAdrsInput, categoriaUncheckedCreateWithoutAdrsInput>
  }

  export type categoriaUpdateWithWhereUniqueWithoutAdrsInput = {
    where: categoriaWhereUniqueInput
    data: XOR<categoriaUpdateWithoutAdrsInput, categoriaUncheckedUpdateWithoutAdrsInput>
  }

  export type categoriaUpdateManyWithWhereWithoutAdrsInput = {
    where: categoriaScalarWhereInput
    data: XOR<categoriaUpdateManyMutationInput, categoriaUncheckedUpdateManyWithoutAdrsInput>
  }

  export type categoriaScalarWhereInput = {
    AND?: categoriaScalarWhereInput | categoriaScalarWhereInput[]
    OR?: categoriaScalarWhereInput[]
    NOT?: categoriaScalarWhereInput | categoriaScalarWhereInput[]
    id?: IntFilter<"categoria"> | number
    nome?: StringFilter<"categoria"> | string
  }

  export type templateUpsertWithoutAdrsInput = {
    update: XOR<templateUpdateWithoutAdrsInput, templateUncheckedUpdateWithoutAdrsInput>
    create: XOR<templateCreateWithoutAdrsInput, templateUncheckedCreateWithoutAdrsInput>
    where?: templateWhereInput
  }

  export type templateUpdateToOneWithWhereWithoutAdrsInput = {
    where?: templateWhereInput
    data: XOR<templateUpdateWithoutAdrsInput, templateUncheckedUpdateWithoutAdrsInput>
  }

  export type templateUpdateWithoutAdrsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    field?: fieldUpdateOneRequiredWithoutTemplateNestedInput
  }

  export type templateUncheckedUpdateWithoutAdrsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    fieldId?: IntFieldUpdateOperationsInput | number
  }

  export type fieldCreateWithoutTemplateInput = {
    campos: JsonNullValueInput | InputJsonValue
    rule: ruleCreateNestedOneWithoutFieldInput
  }

  export type fieldUncheckedCreateWithoutTemplateInput = {
    id?: number
    campos: JsonNullValueInput | InputJsonValue
    ruleId: number
  }

  export type fieldCreateOrConnectWithoutTemplateInput = {
    where: fieldWhereUniqueInput
    create: XOR<fieldCreateWithoutTemplateInput, fieldUncheckedCreateWithoutTemplateInput>
  }

  export type adrCreateWithoutTemplateInput = {
    id: number
    nome: string
    substituido?: boolean
    substituidoPor?: number | null
    valido?: boolean
    categorias?: categoriaCreateNestedManyWithoutAdrsInput
  }

  export type adrUncheckedCreateWithoutTemplateInput = {
    id: number
    nome: string
    substituido?: boolean
    substituidoPor?: number | null
    valido?: boolean
    categorias?: categoriaUncheckedCreateNestedManyWithoutAdrsInput
  }

  export type adrCreateOrConnectWithoutTemplateInput = {
    where: adrWhereUniqueInput
    create: XOR<adrCreateWithoutTemplateInput, adrUncheckedCreateWithoutTemplateInput>
  }

  export type adrCreateManyTemplateInputEnvelope = {
    data: adrCreateManyTemplateInput | adrCreateManyTemplateInput[]
  }

  export type fieldUpsertWithoutTemplateInput = {
    update: XOR<fieldUpdateWithoutTemplateInput, fieldUncheckedUpdateWithoutTemplateInput>
    create: XOR<fieldCreateWithoutTemplateInput, fieldUncheckedCreateWithoutTemplateInput>
    where?: fieldWhereInput
  }

  export type fieldUpdateToOneWithWhereWithoutTemplateInput = {
    where?: fieldWhereInput
    data: XOR<fieldUpdateWithoutTemplateInput, fieldUncheckedUpdateWithoutTemplateInput>
  }

  export type fieldUpdateWithoutTemplateInput = {
    campos?: JsonNullValueInput | InputJsonValue
    rule?: ruleUpdateOneRequiredWithoutFieldNestedInput
  }

  export type fieldUncheckedUpdateWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    campos?: JsonNullValueInput | InputJsonValue
    ruleId?: IntFieldUpdateOperationsInput | number
  }

  export type adrUpsertWithWhereUniqueWithoutTemplateInput = {
    where: adrWhereUniqueInput
    update: XOR<adrUpdateWithoutTemplateInput, adrUncheckedUpdateWithoutTemplateInput>
    create: XOR<adrCreateWithoutTemplateInput, adrUncheckedCreateWithoutTemplateInput>
  }

  export type adrUpdateWithWhereUniqueWithoutTemplateInput = {
    where: adrWhereUniqueInput
    data: XOR<adrUpdateWithoutTemplateInput, adrUncheckedUpdateWithoutTemplateInput>
  }

  export type adrUpdateManyWithWhereWithoutTemplateInput = {
    where: adrScalarWhereInput
    data: XOR<adrUpdateManyMutationInput, adrUncheckedUpdateManyWithoutTemplateInput>
  }

  export type adrScalarWhereInput = {
    AND?: adrScalarWhereInput | adrScalarWhereInput[]
    OR?: adrScalarWhereInput[]
    NOT?: adrScalarWhereInput | adrScalarWhereInput[]
    id?: IntFilter<"adr"> | number
    nome?: StringFilter<"adr"> | string
    templateId?: IntFilter<"adr"> | number
    substituido?: BoolFilter<"adr"> | boolean
    substituidoPor?: IntNullableFilter<"adr"> | number | null
    valido?: BoolFilter<"adr"> | boolean
  }

  export type ruleCreateWithoutFieldInput = {
    regras: JsonNullValueInput | InputJsonValue
  }

  export type ruleUncheckedCreateWithoutFieldInput = {
    id?: number
    regras: JsonNullValueInput | InputJsonValue
  }

  export type ruleCreateOrConnectWithoutFieldInput = {
    where: ruleWhereUniqueInput
    create: XOR<ruleCreateWithoutFieldInput, ruleUncheckedCreateWithoutFieldInput>
  }

  export type templateCreateWithoutFieldInput = {
    nome: string
    adrs?: adrCreateNestedManyWithoutTemplateInput
  }

  export type templateUncheckedCreateWithoutFieldInput = {
    id?: number
    nome: string
    adrs?: adrUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type templateCreateOrConnectWithoutFieldInput = {
    where: templateWhereUniqueInput
    create: XOR<templateCreateWithoutFieldInput, templateUncheckedCreateWithoutFieldInput>
  }

  export type ruleUpsertWithoutFieldInput = {
    update: XOR<ruleUpdateWithoutFieldInput, ruleUncheckedUpdateWithoutFieldInput>
    create: XOR<ruleCreateWithoutFieldInput, ruleUncheckedCreateWithoutFieldInput>
    where?: ruleWhereInput
  }

  export type ruleUpdateToOneWithWhereWithoutFieldInput = {
    where?: ruleWhereInput
    data: XOR<ruleUpdateWithoutFieldInput, ruleUncheckedUpdateWithoutFieldInput>
  }

  export type ruleUpdateWithoutFieldInput = {
    regras?: JsonNullValueInput | InputJsonValue
  }

  export type ruleUncheckedUpdateWithoutFieldInput = {
    id?: IntFieldUpdateOperationsInput | number
    regras?: JsonNullValueInput | InputJsonValue
  }

  export type templateUpsertWithoutFieldInput = {
    update: XOR<templateUpdateWithoutFieldInput, templateUncheckedUpdateWithoutFieldInput>
    create: XOR<templateCreateWithoutFieldInput, templateUncheckedCreateWithoutFieldInput>
    where?: templateWhereInput
  }

  export type templateUpdateToOneWithWhereWithoutFieldInput = {
    where?: templateWhereInput
    data: XOR<templateUpdateWithoutFieldInput, templateUncheckedUpdateWithoutFieldInput>
  }

  export type templateUpdateWithoutFieldInput = {
    nome?: StringFieldUpdateOperationsInput | string
    adrs?: adrUpdateManyWithoutTemplateNestedInput
  }

  export type templateUncheckedUpdateWithoutFieldInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    adrs?: adrUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type fieldCreateWithoutRuleInput = {
    campos: JsonNullValueInput | InputJsonValue
    template?: templateCreateNestedOneWithoutFieldInput
  }

  export type fieldUncheckedCreateWithoutRuleInput = {
    id?: number
    campos: JsonNullValueInput | InputJsonValue
    template?: templateUncheckedCreateNestedOneWithoutFieldInput
  }

  export type fieldCreateOrConnectWithoutRuleInput = {
    where: fieldWhereUniqueInput
    create: XOR<fieldCreateWithoutRuleInput, fieldUncheckedCreateWithoutRuleInput>
  }

  export type fieldUpsertWithoutRuleInput = {
    update: XOR<fieldUpdateWithoutRuleInput, fieldUncheckedUpdateWithoutRuleInput>
    create: XOR<fieldCreateWithoutRuleInput, fieldUncheckedCreateWithoutRuleInput>
    where?: fieldWhereInput
  }

  export type fieldUpdateToOneWithWhereWithoutRuleInput = {
    where?: fieldWhereInput
    data: XOR<fieldUpdateWithoutRuleInput, fieldUncheckedUpdateWithoutRuleInput>
  }

  export type fieldUpdateWithoutRuleInput = {
    campos?: JsonNullValueInput | InputJsonValue
    template?: templateUpdateOneWithoutFieldNestedInput
  }

  export type fieldUncheckedUpdateWithoutRuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    campos?: JsonNullValueInput | InputJsonValue
    template?: templateUncheckedUpdateOneWithoutFieldNestedInput
  }

  export type adrCreateWithoutCategoriasInput = {
    id: number
    nome: string
    substituido?: boolean
    substituidoPor?: number | null
    valido?: boolean
    template: templateCreateNestedOneWithoutAdrsInput
  }

  export type adrUncheckedCreateWithoutCategoriasInput = {
    id: number
    nome: string
    templateId: number
    substituido?: boolean
    substituidoPor?: number | null
    valido?: boolean
  }

  export type adrCreateOrConnectWithoutCategoriasInput = {
    where: adrWhereUniqueInput
    create: XOR<adrCreateWithoutCategoriasInput, adrUncheckedCreateWithoutCategoriasInput>
  }

  export type adrUpsertWithWhereUniqueWithoutCategoriasInput = {
    where: adrWhereUniqueInput
    update: XOR<adrUpdateWithoutCategoriasInput, adrUncheckedUpdateWithoutCategoriasInput>
    create: XOR<adrCreateWithoutCategoriasInput, adrUncheckedCreateWithoutCategoriasInput>
  }

  export type adrUpdateWithWhereUniqueWithoutCategoriasInput = {
    where: adrWhereUniqueInput
    data: XOR<adrUpdateWithoutCategoriasInput, adrUncheckedUpdateWithoutCategoriasInput>
  }

  export type adrUpdateManyWithWhereWithoutCategoriasInput = {
    where: adrScalarWhereInput
    data: XOR<adrUpdateManyMutationInput, adrUncheckedUpdateManyWithoutCategoriasInput>
  }

  export type categoriaUpdateWithoutAdrsInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type categoriaUncheckedUpdateWithoutAdrsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type categoriaUncheckedUpdateManyWithoutAdrsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type adrCreateManyTemplateInput = {
    id: number
    nome: string
    substituido?: boolean
    substituidoPor?: number | null
    valido?: boolean
  }

  export type adrUpdateWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    substituido?: BoolFieldUpdateOperationsInput | boolean
    substituidoPor?: NullableIntFieldUpdateOperationsInput | number | null
    valido?: BoolFieldUpdateOperationsInput | boolean
    categorias?: categoriaUpdateManyWithoutAdrsNestedInput
  }

  export type adrUncheckedUpdateWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    substituido?: BoolFieldUpdateOperationsInput | boolean
    substituidoPor?: NullableIntFieldUpdateOperationsInput | number | null
    valido?: BoolFieldUpdateOperationsInput | boolean
    categorias?: categoriaUncheckedUpdateManyWithoutAdrsNestedInput
  }

  export type adrUncheckedUpdateManyWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    substituido?: BoolFieldUpdateOperationsInput | boolean
    substituidoPor?: NullableIntFieldUpdateOperationsInput | number | null
    valido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type adrUpdateWithoutCategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    substituido?: BoolFieldUpdateOperationsInput | boolean
    substituidoPor?: NullableIntFieldUpdateOperationsInput | number | null
    valido?: BoolFieldUpdateOperationsInput | boolean
    template?: templateUpdateOneRequiredWithoutAdrsNestedInput
  }

  export type adrUncheckedUpdateWithoutCategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    templateId?: IntFieldUpdateOperationsInput | number
    substituido?: BoolFieldUpdateOperationsInput | boolean
    substituidoPor?: NullableIntFieldUpdateOperationsInput | number | null
    valido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type adrUncheckedUpdateManyWithoutCategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    templateId?: IntFieldUpdateOperationsInput | number
    substituido?: BoolFieldUpdateOperationsInput | boolean
    substituidoPor?: NullableIntFieldUpdateOperationsInput | number | null
    valido?: BoolFieldUpdateOperationsInput | boolean
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