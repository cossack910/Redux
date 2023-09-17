# Redux

## 開発サーバー立ち上げ時

```
docker exec -it reactredux npm run dev
```

## 環境構築

clone と立ち上げ時

```
docker exec -it reactredux npm install
docker exec -it reactredux npm run build
```

新規プロジェクト立ち上げ

```
docker-compose run --rm reactredux npm create vite@latest .
```

react-redux

```
docker exec -it reactredux npm install react-redux
```

redux-toolkit

```
docker exec -it reactredux npm install @reduxjs/toolkit
```
