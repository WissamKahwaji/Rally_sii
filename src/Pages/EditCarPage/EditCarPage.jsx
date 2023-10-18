import React from "react";
import { baseURL } from "../../API/baseURL";
import { Form, useLoaderData } from "react-router-dom";
import PageContainer from "../../Components/UI/PageContainer";
import Input from "../../Components/UI/Input";

const EditCarPage = () => {
  const data = useLoaderData();
  return (
    <PageContainer>
      <Form method="post" encType="multipart/form-data">
        <Input
          input={{
            id: "pageHeading",
            name: "pageHeading",
            title: "Page Heading",
            defaultValue: data.data.pageHeading,
          }}
        />

        <Input
          input={{
            id: "descHeading",
            name: "descHeading",
            title: "Description Heading",
            defaultValue: data.data.descHeading,
          }}
        />

        <Input
          input={{
            id: "img",
            name: "img",
            title: "Image",
            type: "file",
          }}
        />
        <button>submit</button>
      </Form>
    </PageContainer>
  );
};

export default EditCarPage;
export const editCarPageLoader = async () => {
  const response = await fetch(`${baseURL}/carPage`);
  const data = await response.json();
  return data;
};
export const editCarPageAction = async ({ request }) => {
  const data = await request.formData();
  const response = await fetch(
    `${baseURL}/carPage/edit-carPage/651d53a1db430e14fb50636d`,
    {
      method: "put",
      body: data,
    }
  );
  const dataResponse = await response.json();
  console.log(dataResponse);
  return null;
};
