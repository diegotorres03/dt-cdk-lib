# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

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



## Classes <a name="Classes" id="Classes"></a>

### Hello <a name="Hello" id="dt-cdk-lib.Hello"></a>

#### Initializers <a name="Initializers" id="dt-cdk-lib.Hello.Initializer"></a>

```typescript
import { Hello } from 'dt-cdk-lib'

new Hello()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#dt-cdk-lib.Hello.sayHello">sayHello</a></code> | *No description.* |

---

##### `sayHello` <a name="sayHello" id="dt-cdk-lib.Hello.sayHello"></a>

```typescript
public sayHello(): string
```





