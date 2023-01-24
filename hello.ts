import { APIGatewayProxyHandler } from 'aws-lambda';

interface IBody {
  tokenFigma: string;
  tokenGithub: string;
}

export const hello: APIGatewayProxyHandler = async (event) => {
  const body = event.body as unknown as IBody;
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      body,
      null,
      2
    ),
  };
};