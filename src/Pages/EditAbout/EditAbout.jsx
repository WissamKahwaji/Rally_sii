import React from "react";
import PageContainer from "../../Components/UI/PageContainer";
import { Form, useLoaderData } from "react-router-dom";
import { baseURL } from "../../API/baseURL";
import Input from "../../Components/UI/Input";

const EditAbout = () => {
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
        <button>submit</button>
      </Form>
    </PageContainer>
  );
};

export default EditAbout;
export const editAboutLoader = async () => {
  const response = await fetch(`${baseURL}/about`);
  const data = await response.json();
  return data;
};
export const editAboutAction = async ({ request }) => {
  const data = await request.formData();
  const response = await fetch(
    `${baseURL}/about/edit-about/651d51afdb430e14fb506360`,
    {
      method: "put",
      body: data,
    }
  );
  const dataResponse = await response.json();
  console.log(dataResponse);
  return null;
};
