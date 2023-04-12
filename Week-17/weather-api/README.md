
# Weather API in NodeJs


## API Reference

#### Get Single City

```http
  GET /city
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**  or pin|
| `pin` | `number` | optional |

#### Get Multiple Cities

```http
  GET /cities
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string or array` | **Required** |

#### Get forecast of single city
```http
  GET /forecast
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required** |
| `days`      | `number` | default: 0 |


#### Get Radom city data (pagination)

```http
  GET /random
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `start`      | `number` | default:0 |
| `length`      | `number` | default:3 max:5 |



## Deployment

To deploy this project run

#### install dependencies
```bash
  npm install
```
#### start server
```bash
  npm index.js
```
navigate to http://localhost:3001