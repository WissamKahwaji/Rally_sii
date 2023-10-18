import React from "react";
import { Form, useLoaderData } from "react-router-dom";
import { baseURL } from "../../API/baseURL";
import PageContainer from "../../Components/UI/PageContainer";
import Input from "../../Components/UI/Input";

const EditHome = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <PageContainer>
      <Form method="post" encType="multipart/form-data">
        <Input
          input={{
            id: "brandDesc",
            name: "brandDesc",
            title: "Brand Description",
            defaultValue: data.data.brandDesc,
          }}
        />
        <Input
          input={{
            id: "brandName",
            name: "brandName",
            title: "Brand Name",
            defaultValue: data.data.brandName,
          }}
        />
        <Input
          input={{
            id: "facebook",
            name: "facebook",
            title: "Facebook Link",
            defaultValue: data.data.facebook,
          }}
        />
        <Input
          input={{
            id: "instagram",
            name: "instagram",
            title: "Brand Instagram",
            defaultValue: data.data.instagram,
          }}
        />
        <Input
          input={{
            id: "landingImg",
            name: "landingImg",
            title: "Brand Landing Img",
            type: "file",
            // defaultValue: data.data.landingImg,
          }}
        />
        <Input
          input={{
            id: "linkedIn",
            name: "linkedIn",
            title: "LinkedIn",
            defaultValue: data.data.linkedIn,
          }}
        />
        <Input
          input={{
            id: "location",
            name: "location",
            title: "Location",
            defaultValue: data.data.location,
          }}
        />

        <Input
          input={{
            id: "logoImg",
            name: "logoImg",
            title: "Logo Image",
            type: "file",

            // defaultValue: data.data.logoImg,
          }}
        />
        <Input
          input={{
            id: "mailId",
            name: "mailId",
            title: "Mail ID",
            defaultValue: data.data.mailId,
          }}
        />
        <Input
          input={{
            id: "mobileNumber",
            name: "mobileNumber",
            title: "Mobile Number",
            defaultValue: data.data.mobileNumber,
          }}
        />
        <Input
          input={{
            id: "phoneNumber",
            name: "phoneNumber",
            title: "Phone Number",
            defaultValue: data.data.phoneNumber,
          }}
        />
        <Input
          input={{
            id: "twitter",
            name: "twitter",
            title: "Twitter",
            defaultValue: data.data.twitter,
          }}
        />
        <Input
          input={{
            id: "whatsApp",
            name: "whatsApp",
            title: "WhatsApp",
            defaultValue: data.data.whatsApp,
          }}
        />
        <Input
          input={{
            id: "youtube",
            name: "youtube",
            title: "YouTube",
            defaultValue: data.data.youtube,
          }}
        />
        <button>Submit</button>
      </Form>
    </PageContainer>
  );
};

export default EditHome;
export const editHomeLoader = async () => {
  const response = await fetch(`${baseURL}/home`);
  const data = await response.json();
  return data;
};
export const editHomeAction = async ({ request }) => {
  const data = await request.formData();
  console.log(data.forEach((ele) => console.log(ele)));
  const response = await fetch(
    `${baseURL}/home/edit-home-data/651d4a83db430e14fb50633c`,
    {
      method: "put",
      body: data,
    }
  );

  const dataResponse = await response.json();
  console.log(dataResponse);
  return null;
};
