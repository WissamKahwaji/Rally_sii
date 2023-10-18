import React from "react";
import { baseURL } from "../../API/baseURL";
import PageContainer from "../../Components/UI/PageContainer";
import { Form, useLoaderData } from "react-router-dom";
import Input from "../../Components/UI/Input";

const EditColor = () => {
  const data = useLoaderData();
  return (
    <PageContainer>
      <Form method="post" encType="multipart/form-data">
        <Input
          input={{
            id: "mainColor",
            name: "mainColor",
            title: "Main Color",
            defaultValue: data.data.mainColor,
          }}
        />

        <Input
          input={{
            id: "navColor",
            name: "navColor",
            title: "Navigation Color",
            defaultValue: data.data.navColor,
          }}
        />

        <Input
          input={{
            id: "linear",
            name: "linear",
            title: "Linear",
            defaultValue: data.data.linear,
          }}
        />
        <button>Submit</button>
      </Form>
    </PageContainer>
  );
};

export default EditColor;
export const editColorLoader = async () => {
  const response = await fetch(`${baseURL}/colors/`);
  const data = await response.json();
  return data;
};
export const editColorAction = async ({ request }) => {
  const data = await request.formData();
  const response = await fetch(
    `${baseURL}/colors/edit-colors`,
    {
      method: "put",
      body: data,
    }
  );
  const dataResponse = await response.json();
  console.log(dataResponse);
  return null;
};
