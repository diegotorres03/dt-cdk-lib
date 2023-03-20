# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamoCostruct <a name="DynamoCostruct" id="dt-cdk-lib.DynamoCostruct"></a>

#### Initializers <a name="Initializers" id="dt-cdk-lib.DynamoCostruct.Initializer"></a>

```typescript
import { DynamoCostruct } from 'dt-cdk-lib'

new DynamoCostruct(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dt-cdk-lib.DynamoCostruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#dt-cdk-lib.DynamoCostruct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="dt-cdk-lib.DynamoCostruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="dt-cdk-lib.DynamoCostruct.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dt-cdk-lib.DynamoCostruct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#dt-cdk-lib.DynamoCostruct.addDax">addDax</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.DynamoCostruct.addIndex">addIndex</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.DynamoCostruct.addKeys">addKeys</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.DynamoCostruct.createDax">createDax</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.DynamoCostruct.end">end</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.DynamoCostruct.on">on</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="dt-cdk-lib.DynamoCostruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDax` <a name="addDax" id="dt-cdk-lib.DynamoCostruct.addDax"></a>

```typescript
public addDax(): void
```

##### `addIndex` <a name="addIndex" id="dt-cdk-lib.DynamoCostruct.addIndex"></a>

```typescript
public addIndex(): void
```

##### `addKeys` <a name="addKeys" id="dt-cdk-lib.DynamoCostruct.addKeys"></a>

```typescript
public addKeys(partitionKey: string, sortKey?: string): void
```

###### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="dt-cdk-lib.DynamoCostruct.addKeys.parameter.partitionKey"></a>

- *Type:* string

---

###### `sortKey`<sup>Optional</sup> <a name="sortKey" id="dt-cdk-lib.DynamoCostruct.addKeys.parameter.sortKey"></a>

- *Type:* string

---

##### `createDax` <a name="createDax" id="dt-cdk-lib.DynamoCostruct.createDax"></a>

```typescript
public createDax(subnetIds: string[], securityGroupIds: string[]): void
```

###### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="dt-cdk-lib.DynamoCostruct.createDax.parameter.subnetIds"></a>

- *Type:* string[]

---

###### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="dt-cdk-lib.DynamoCostruct.createDax.parameter.securityGroupIds"></a>

- *Type:* string[]

---

##### `end` <a name="end" id="dt-cdk-lib.DynamoCostruct.end"></a>

```typescript
public end(): void
```

##### `on` <a name="on" id="dt-cdk-lib.DynamoCostruct.on"></a>

```typescript
public on(eventName: string, handlerCode: string): void
```

###### `eventName`<sup>Required</sup> <a name="eventName" id="dt-cdk-lib.DynamoCostruct.on.parameter.eventName"></a>

- *Type:* string

---

###### `handlerCode`<sup>Required</sup> <a name="handlerCode" id="dt-cdk-lib.DynamoCostruct.on.parameter.handlerCode"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dt-cdk-lib.DynamoCostruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="dt-cdk-lib.DynamoCostruct.isConstruct"></a>

```typescript
import { DynamoCostruct } from 'dt-cdk-lib'

DynamoCostruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="dt-cdk-lib.DynamoCostruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dt-cdk-lib.DynamoCostruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#dt-cdk-lib.DynamoCostruct.property.daxCache">daxCache</a></code> | <code>aws-cdk-lib.aws_dax.CfnCluster</code> | *No description.* |
| <code><a href="#dt-cdk-lib.DynamoCostruct.property.table">table</a></code> | <code>aws-cdk-lib.aws_dynamodb.Table</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="dt-cdk-lib.DynamoCostruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `daxCache`<sup>Optional</sup> <a name="daxCache" id="dt-cdk-lib.DynamoCostruct.property.daxCache"></a>

```typescript
public readonly daxCache: CfnCluster;
```

- *Type:* aws-cdk-lib.aws_dax.CfnCluster

---

##### `table`<sup>Optional</sup> <a name="table" id="dt-cdk-lib.DynamoCostruct.property.table"></a>

```typescript
public readonly table: Table;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Table

---


### FunctionConstruct <a name="FunctionConstruct" id="dt-cdk-lib.FunctionConstruct"></a>

#### Initializers <a name="Initializers" id="dt-cdk-lib.FunctionConstruct.Initializer"></a>

```typescript
import { FunctionConstruct } from 'dt-cdk-lib'

new FunctionConstruct(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dt-cdk-lib.FunctionConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#dt-cdk-lib.FunctionConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="dt-cdk-lib.FunctionConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="dt-cdk-lib.FunctionConstruct.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dt-cdk-lib.FunctionConstruct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#dt-cdk-lib.FunctionConstruct.createLayer">createLayer</a></code> | create a layer from local file, s3 url or existing layer construct. |
| <code><a href="#dt-cdk-lib.FunctionConstruct.handler">handler</a></code> | here is where you add or reference the lambda code. |
| <code><a href="#dt-cdk-lib.FunctionConstruct.trigger">trigger</a></code> | this tell wich will be the trigger or source of the event for lambda to handle. |
| <code><a href="#dt-cdk-lib.FunctionConstruct.useLayer">useLayer</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="dt-cdk-lib.FunctionConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `createLayer` <a name="createLayer" id="dt-cdk-lib.FunctionConstruct.createLayer"></a>

```typescript
public createLayer(name: string, path: string): LayerVersion
```

create a layer from local file, s3 url or existing layer construct.

###### `name`<sup>Required</sup> <a name="name" id="dt-cdk-lib.FunctionConstruct.createLayer.parameter.name"></a>

- *Type:* string

layer friendly name.

---

###### `path`<sup>Required</sup> <a name="path" id="dt-cdk-lib.FunctionConstruct.createLayer.parameter.path"></a>

- *Type:* string

local or s3 path to layer folder.

---

##### `handler` <a name="handler" id="dt-cdk-lib.FunctionConstruct.handler"></a>

```typescript
public handler(functionCode: string, options?: FunctionOptions): void
```

here is where you add or reference the lambda code.

###### `functionCode`<sup>Required</sup> <a name="functionCode" id="dt-cdk-lib.FunctionConstruct.handler.parameter.functionCode"></a>

- *Type:* string

function code in the target language as a string, or a ./path/to/file or s3://path/to/file.

---

###### `options`<sup>Optional</sup> <a name="options" id="dt-cdk-lib.FunctionConstruct.handler.parameter.options"></a>

- *Type:* <a href="#dt-cdk-lib.FunctionOptions">FunctionOptions</a>

---

##### `trigger` <a name="trigger" id="dt-cdk-lib.FunctionConstruct.trigger"></a>

```typescript
public trigger(construct: Construct): void
```

this tell wich will be the trigger or source of the event for lambda to handle.

###### `construct`<sup>Required</sup> <a name="construct" id="dt-cdk-lib.FunctionConstruct.trigger.parameter.construct"></a>

- *Type:* constructs.Construct

---

##### `useLayer` <a name="useLayer" id="dt-cdk-lib.FunctionConstruct.useLayer"></a>

```typescript
public useLayer(name: string): void
```

###### `name`<sup>Required</sup> <a name="name" id="dt-cdk-lib.FunctionConstruct.useLayer.parameter.name"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dt-cdk-lib.FunctionConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="dt-cdk-lib.FunctionConstruct.isConstruct"></a>

```typescript
import { FunctionConstruct } from 'dt-cdk-lib'

FunctionConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="dt-cdk-lib.FunctionConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dt-cdk-lib.FunctionConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#dt-cdk-lib.FunctionConstruct.property.handlerFn">handlerFn</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | *No description.* |
| <code><a href="#dt-cdk-lib.FunctionConstruct.property.layers">layers</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_lambda.LayerVersion}</code> | *No description.* |
| <code><a href="#dt-cdk-lib.FunctionConstruct.property.layersToUse">layersToUse</a></code> | <code>aws-cdk-lib.aws_lambda.LayerVersion[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="dt-cdk-lib.FunctionConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `handlerFn`<sup>Required</sup> <a name="handlerFn" id="dt-cdk-lib.FunctionConstruct.property.handlerFn"></a>

```typescript
public readonly handlerFn: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

---

##### `layers`<sup>Required</sup> <a name="layers" id="dt-cdk-lib.FunctionConstruct.property.layers"></a>

```typescript
public readonly layers: {[ key: string ]: LayerVersion};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_lambda.LayerVersion}

---

##### `layersToUse`<sup>Required</sup> <a name="layersToUse" id="dt-cdk-lib.FunctionConstruct.property.layersToUse"></a>

```typescript
public readonly layersToUse: LayerVersion[];
```

- *Type:* aws-cdk-lib.aws_lambda.LayerVersion[]

---


### GraphQlApiConstruct <a name="GraphQlApiConstruct" id="dt-cdk-lib.GraphQlApiConstruct"></a>

#### Initializers <a name="Initializers" id="dt-cdk-lib.GraphQlApiConstruct.Initializer"></a>

```typescript
import { GraphQlApiConstruct } from 'dt-cdk-lib'

new GraphQlApiConstruct(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dt-cdk-lib.GraphQlApiConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#dt-cdk-lib.GraphQlApiConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="dt-cdk-lib.GraphQlApiConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="dt-cdk-lib.GraphQlApiConstruct.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dt-cdk-lib.GraphQlApiConstruct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#dt-cdk-lib.GraphQlApiConstruct.addToSchema">addToSchema</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.GraphQlApiConstruct.done">done</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.GraphQlApiConstruct.mutation">mutation</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.GraphQlApiConstruct.query">query</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.GraphQlApiConstruct.schema">schema</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.GraphQlApiConstruct.subscription">subscription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="dt-cdk-lib.GraphQlApiConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addToSchema` <a name="addToSchema" id="dt-cdk-lib.GraphQlApiConstruct.addToSchema"></a>

```typescript
public addToSchema(fragment: string): GraphQlApiConstruct
```

###### `fragment`<sup>Required</sup> <a name="fragment" id="dt-cdk-lib.GraphQlApiConstruct.addToSchema.parameter.fragment"></a>

- *Type:* string

---

##### `done` <a name="done" id="dt-cdk-lib.GraphQlApiConstruct.done"></a>

```typescript
public done(): void
```

##### `mutation` <a name="mutation" id="dt-cdk-lib.GraphQlApiConstruct.mutation"></a>

```typescript
public mutation(name: string): GraphQlApiConstruct
```

###### `name`<sup>Required</sup> <a name="name" id="dt-cdk-lib.GraphQlApiConstruct.mutation.parameter.name"></a>

- *Type:* string

---

##### `query` <a name="query" id="dt-cdk-lib.GraphQlApiConstruct.query"></a>

```typescript
public query(name: string): GraphQlApiConstruct
```

###### `name`<sup>Required</sup> <a name="name" id="dt-cdk-lib.GraphQlApiConstruct.query.parameter.name"></a>

- *Type:* string

---

##### `schema` <a name="schema" id="dt-cdk-lib.GraphQlApiConstruct.schema"></a>

```typescript
public schema(value: string): GraphQlApiConstruct
```

###### `value`<sup>Required</sup> <a name="value" id="dt-cdk-lib.GraphQlApiConstruct.schema.parameter.value"></a>

- *Type:* string

---

##### `subscription` <a name="subscription" id="dt-cdk-lib.GraphQlApiConstruct.subscription"></a>

```typescript
public subscription(name: string): GraphQlApiConstruct
```

###### `name`<sup>Required</sup> <a name="name" id="dt-cdk-lib.GraphQlApiConstruct.subscription.parameter.name"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dt-cdk-lib.GraphQlApiConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="dt-cdk-lib.GraphQlApiConstruct.isConstruct"></a>

```typescript
import { GraphQlApiConstruct } from 'dt-cdk-lib'

GraphQlApiConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="dt-cdk-lib.GraphQlApiConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dt-cdk-lib.GraphQlApiConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="dt-cdk-lib.GraphQlApiConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### RestApiConstruct <a name="RestApiConstruct" id="dt-cdk-lib.RestApiConstruct"></a>

#### Initializers <a name="Initializers" id="dt-cdk-lib.RestApiConstruct.Initializer"></a>

```typescript
import { RestApiConstruct } from 'dt-cdk-lib'

new RestApiConstruct(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dt-cdk-lib.RestApiConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#dt-cdk-lib.RestApiConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="dt-cdk-lib.RestApiConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="dt-cdk-lib.RestApiConstruct.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dt-cdk-lib.RestApiConstruct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#dt-cdk-lib.RestApiConstruct.authorizer">authorizer</a></code> | create an authorizer and use it in the followin lambdas until a new authorizer is created. |
| <code><a href="#dt-cdk-lib.RestApiConstruct.cors">cors</a></code> | enable cors for this API. |
| <code><a href="#dt-cdk-lib.RestApiConstruct.delete">delete</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.RestApiConstruct.get">get</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.RestApiConstruct.head">head</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.RestApiConstruct.options">options</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.RestApiConstruct.post">post</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.RestApiConstruct.put">put</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.RestApiConstruct.readFrom">readFrom</a></code> | let the last created lambda hace read access to a given construct. |
| <code><a href="#dt-cdk-lib.RestApiConstruct.writeTo">writeTo</a></code> | let the last created lambda hace write access to a given construct. |

---

##### `toString` <a name="toString" id="dt-cdk-lib.RestApiConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `authorizer` <a name="authorizer" id="dt-cdk-lib.RestApiConstruct.authorizer"></a>

```typescript
public authorizer(name: string, handlerCode: string): RestApiConstruct
```

create an authorizer and use it in the followin lambdas until a new authorizer is created.

###### `name`<sup>Required</sup> <a name="name" id="dt-cdk-lib.RestApiConstruct.authorizer.parameter.name"></a>

- *Type:* string

---

###### `handlerCode`<sup>Required</sup> <a name="handlerCode" id="dt-cdk-lib.RestApiConstruct.authorizer.parameter.handlerCode"></a>

- *Type:* string

---

##### `cors` <a name="cors" id="dt-cdk-lib.RestApiConstruct.cors"></a>

```typescript
public cors(options?: CorsOptions): RestApiConstruct
```

enable cors for this API.

###### `options`<sup>Optional</sup> <a name="options" id="dt-cdk-lib.RestApiConstruct.cors.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_apigateway.CorsOptions

---

##### `delete` <a name="delete" id="dt-cdk-lib.RestApiConstruct.delete"></a>

```typescript
public delete(path: string, handlerCode: string, options?: FunctionOptions): RestApiConstruct
```

###### `path`<sup>Required</sup> <a name="path" id="dt-cdk-lib.RestApiConstruct.delete.parameter.path"></a>

- *Type:* string

---

###### `handlerCode`<sup>Required</sup> <a name="handlerCode" id="dt-cdk-lib.RestApiConstruct.delete.parameter.handlerCode"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="dt-cdk-lib.RestApiConstruct.delete.parameter.options"></a>

- *Type:* <a href="#dt-cdk-lib.FunctionOptions">FunctionOptions</a>

---

##### `get` <a name="get" id="dt-cdk-lib.RestApiConstruct.get"></a>

```typescript
public get(path: string, handlerCode: string, options?: FunctionOptions): RestApiConstruct
```

###### `path`<sup>Required</sup> <a name="path" id="dt-cdk-lib.RestApiConstruct.get.parameter.path"></a>

- *Type:* string

---

###### `handlerCode`<sup>Required</sup> <a name="handlerCode" id="dt-cdk-lib.RestApiConstruct.get.parameter.handlerCode"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="dt-cdk-lib.RestApiConstruct.get.parameter.options"></a>

- *Type:* <a href="#dt-cdk-lib.FunctionOptions">FunctionOptions</a>

---

##### `head` <a name="head" id="dt-cdk-lib.RestApiConstruct.head"></a>

```typescript
public head(path: string, handlerCode: string, options?: FunctionOptions): RestApiConstruct
```

###### `path`<sup>Required</sup> <a name="path" id="dt-cdk-lib.RestApiConstruct.head.parameter.path"></a>

- *Type:* string

---

###### `handlerCode`<sup>Required</sup> <a name="handlerCode" id="dt-cdk-lib.RestApiConstruct.head.parameter.handlerCode"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="dt-cdk-lib.RestApiConstruct.head.parameter.options"></a>

- *Type:* <a href="#dt-cdk-lib.FunctionOptions">FunctionOptions</a>

---

##### `options` <a name="options" id="dt-cdk-lib.RestApiConstruct.options"></a>

```typescript
public options(path: string, handlerCode: string, options?: FunctionOptions): RestApiConstruct
```

###### `path`<sup>Required</sup> <a name="path" id="dt-cdk-lib.RestApiConstruct.options.parameter.path"></a>

- *Type:* string

---

###### `handlerCode`<sup>Required</sup> <a name="handlerCode" id="dt-cdk-lib.RestApiConstruct.options.parameter.handlerCode"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="dt-cdk-lib.RestApiConstruct.options.parameter.options"></a>

- *Type:* <a href="#dt-cdk-lib.FunctionOptions">FunctionOptions</a>

---

##### `post` <a name="post" id="dt-cdk-lib.RestApiConstruct.post"></a>

```typescript
public post(path: string, handlerCode: string, options?: FunctionOptions): RestApiConstruct
```

###### `path`<sup>Required</sup> <a name="path" id="dt-cdk-lib.RestApiConstruct.post.parameter.path"></a>

- *Type:* string

---

###### `handlerCode`<sup>Required</sup> <a name="handlerCode" id="dt-cdk-lib.RestApiConstruct.post.parameter.handlerCode"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="dt-cdk-lib.RestApiConstruct.post.parameter.options"></a>

- *Type:* <a href="#dt-cdk-lib.FunctionOptions">FunctionOptions</a>

---

##### `put` <a name="put" id="dt-cdk-lib.RestApiConstruct.put"></a>

```typescript
public put(path: string, handlerCode: string, options?: FunctionOptions): RestApiConstruct
```

###### `path`<sup>Required</sup> <a name="path" id="dt-cdk-lib.RestApiConstruct.put.parameter.path"></a>

- *Type:* string

---

###### `handlerCode`<sup>Required</sup> <a name="handlerCode" id="dt-cdk-lib.RestApiConstruct.put.parameter.handlerCode"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="dt-cdk-lib.RestApiConstruct.put.parameter.options"></a>

- *Type:* <a href="#dt-cdk-lib.FunctionOptions">FunctionOptions</a>

---

##### `readFrom` <a name="readFrom" id="dt-cdk-lib.RestApiConstruct.readFrom"></a>

```typescript
public readFrom(construct: Construct): RestApiConstruct
```

let the last created lambda hace read access to a given construct.

Supported targets:
- DynamoDB

###### `construct`<sup>Required</sup> <a name="construct" id="dt-cdk-lib.RestApiConstruct.readFrom.parameter.construct"></a>

- *Type:* constructs.Construct

---

##### `writeTo` <a name="writeTo" id="dt-cdk-lib.RestApiConstruct.writeTo"></a>

```typescript
public writeTo(construct: Construct): RestApiConstruct
```

let the last created lambda hace write access to a given construct.

Supported targets:
- DynamoDB

###### `construct`<sup>Required</sup> <a name="construct" id="dt-cdk-lib.RestApiConstruct.writeTo.parameter.construct"></a>

- *Type:* constructs.Construct

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dt-cdk-lib.RestApiConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="dt-cdk-lib.RestApiConstruct.isConstruct"></a>

```typescript
import { RestApiConstruct } from 'dt-cdk-lib'

RestApiConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="dt-cdk-lib.RestApiConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dt-cdk-lib.RestApiConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="dt-cdk-lib.RestApiConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### WebAppConstruct <a name="WebAppConstruct" id="dt-cdk-lib.WebAppConstruct"></a>

#### Initializers <a name="Initializers" id="dt-cdk-lib.WebAppConstruct.Initializer"></a>

```typescript
import { WebAppConstruct } from 'dt-cdk-lib'

new WebAppConstruct(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dt-cdk-lib.WebAppConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#dt-cdk-lib.WebAppConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="dt-cdk-lib.WebAppConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="dt-cdk-lib.WebAppConstruct.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dt-cdk-lib.WebAppConstruct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#dt-cdk-lib.WebAppConstruct.addAssets">addAssets</a></code> | Use this metod to upload application artifacts add local assets to the remote store (S3 Bucket) be mindfull of size, use this method for small bundles. |
| <code><a href="#dt-cdk-lib.WebAppConstruct.on">on</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.WebAppConstruct.onOriginRequest">onOriginRequest</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.WebAppConstruct.onOriginResponse">onOriginResponse</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.WebAppConstruct.onViewerRequest">onViewerRequest</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.WebAppConstruct.onViewerResponse">onViewerResponse</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.WebAppConstruct.path">path</a></code> | *No description.* |
| <code><a href="#dt-cdk-lib.WebAppConstruct.run">run</a></code> | Run local comands before uploading assets and creating infraestructure. |

---

##### `toString` <a name="toString" id="dt-cdk-lib.WebAppConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addAssets` <a name="addAssets" id="dt-cdk-lib.WebAppConstruct.addAssets"></a>

```typescript
public addAssets(path: string, destinationPath?: string): WebAppConstruct
```

Use this metod to upload application artifacts add local assets to the remote store (S3 Bucket) be mindfull of size, use this method for small bundles.

if you want to send large files, consider using multipart uploads
after deploying infraestructure

###### `path`<sup>Required</sup> <a name="path" id="dt-cdk-lib.WebAppConstruct.addAssets.parameter.path"></a>

- *Type:* string

---

###### `destinationPath`<sup>Optional</sup> <a name="destinationPath" id="dt-cdk-lib.WebAppConstruct.addAssets.parameter.destinationPath"></a>

- *Type:* string

---

##### `on` <a name="on" id="dt-cdk-lib.WebAppConstruct.on"></a>

```typescript
public on(eventType: LambdaEdgeEventType, handlerCode: string | string[]): WebAppConstruct
```

###### `eventType`<sup>Required</sup> <a name="eventType" id="dt-cdk-lib.WebAppConstruct.on.parameter.eventType"></a>

- *Type:* aws-cdk-lib.aws_cloudfront.LambdaEdgeEventType

---

###### `handlerCode`<sup>Required</sup> <a name="handlerCode" id="dt-cdk-lib.WebAppConstruct.on.parameter.handlerCode"></a>

- *Type:* string | string[]

---

##### `onOriginRequest` <a name="onOriginRequest" id="dt-cdk-lib.WebAppConstruct.onOriginRequest"></a>

```typescript
public onOriginRequest(handlerCode: string): WebAppConstruct
```

###### `handlerCode`<sup>Required</sup> <a name="handlerCode" id="dt-cdk-lib.WebAppConstruct.onOriginRequest.parameter.handlerCode"></a>

- *Type:* string

---

##### `onOriginResponse` <a name="onOriginResponse" id="dt-cdk-lib.WebAppConstruct.onOriginResponse"></a>

```typescript
public onOriginResponse(handlerCode: string): WebAppConstruct
```

###### `handlerCode`<sup>Required</sup> <a name="handlerCode" id="dt-cdk-lib.WebAppConstruct.onOriginResponse.parameter.handlerCode"></a>

- *Type:* string

---

##### `onViewerRequest` <a name="onViewerRequest" id="dt-cdk-lib.WebAppConstruct.onViewerRequest"></a>

```typescript
public onViewerRequest(handlerCode: string): WebAppConstruct
```

###### `handlerCode`<sup>Required</sup> <a name="handlerCode" id="dt-cdk-lib.WebAppConstruct.onViewerRequest.parameter.handlerCode"></a>

- *Type:* string

---

##### `onViewerResponse` <a name="onViewerResponse" id="dt-cdk-lib.WebAppConstruct.onViewerResponse"></a>

```typescript
public onViewerResponse(handlerCode: string): WebAppConstruct
```

###### `handlerCode`<sup>Required</sup> <a name="handlerCode" id="dt-cdk-lib.WebAppConstruct.onViewerResponse.parameter.handlerCode"></a>

- *Type:* string

---

##### `path` <a name="path" id="dt-cdk-lib.WebAppConstruct.path"></a>

```typescript
public path(pathPattern: string): WebAppConstruct
```

###### `pathPattern`<sup>Required</sup> <a name="pathPattern" id="dt-cdk-lib.WebAppConstruct.path.parameter.pathPattern"></a>

- *Type:* string

---

##### `run` <a name="run" id="dt-cdk-lib.WebAppConstruct.run"></a>

```typescript
public run(path: string, commands: string | string[]): WebAppConstruct
```

Run local comands before uploading assets and creating infraestructure.

###### `path`<sup>Required</sup> <a name="path" id="dt-cdk-lib.WebAppConstruct.run.parameter.path"></a>

- *Type:* string

---

###### `commands`<sup>Required</sup> <a name="commands" id="dt-cdk-lib.WebAppConstruct.run.parameter.commands"></a>

- *Type:* string | string[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dt-cdk-lib.WebAppConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="dt-cdk-lib.WebAppConstruct.isConstruct"></a>

```typescript
import { WebAppConstruct } from 'dt-cdk-lib'

WebAppConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="dt-cdk-lib.WebAppConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dt-cdk-lib.WebAppConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#dt-cdk-lib.WebAppConstruct.property.webappBucket">webappBucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="dt-cdk-lib.WebAppConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `webappBucket`<sup>Required</sup> <a name="webappBucket" id="dt-cdk-lib.WebAppConstruct.property.webappBucket"></a>

```typescript
public readonly webappBucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dt-cdk-lib.WebAppConstruct.property.EVENT_TYPES">EVENT_TYPES</a></code> | <code>aws-cdk-lib.aws_cloudfront.LambdaEdgeEventType</code> | *No description.* |

---

##### `EVENT_TYPES`<sup>Required</sup> <a name="EVENT_TYPES" id="dt-cdk-lib.WebAppConstruct.property.EVENT_TYPES"></a>

```typescript
public readonly EVENT_TYPES: LambdaEdgeEventType;
```

- *Type:* aws-cdk-lib.aws_cloudfront.LambdaEdgeEventType

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionOptions <a name="FunctionOptions" id="dt-cdk-lib.FunctionOptions"></a>

#### Initializer <a name="Initializer" id="dt-cdk-lib.FunctionOptions.Initializer"></a>

```typescript
import { FunctionOptions } from 'dt-cdk-lib'

const functionOptions: FunctionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#dt-cdk-lib.FunctionOptions.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#dt-cdk-lib.FunctionOptions.property.layers">layers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#dt-cdk-lib.FunctionOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#dt-cdk-lib.FunctionOptions.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#dt-cdk-lib.FunctionOptions.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | *No description.* |
| <code><a href="#dt-cdk-lib.FunctionOptions.property.vpc">vpc</a></code> | <code>string \| aws-cdk-lib.aws_ec2.Vpc</code> | *No description.* |

---

##### `env`<sup>Optional</sup> <a name="env" id="dt-cdk-lib.FunctionOptions.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `layers`<sup>Optional</sup> <a name="layers" id="dt-cdk-lib.FunctionOptions.property.layers"></a>

```typescript
public readonly layers: string[];
```

- *Type:* string[]

---

##### `name`<sup>Optional</sup> <a name="name" id="dt-cdk-lib.FunctionOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="dt-cdk-lib.FunctionOptions.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="dt-cdk-lib.FunctionOptions.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="dt-cdk-lib.FunctionOptions.property.vpc"></a>

```typescript
public readonly vpc: string | Vpc;
```

- *Type:* string | aws-cdk-lib.aws_ec2.Vpc

---



