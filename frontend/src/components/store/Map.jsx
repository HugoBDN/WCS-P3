/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Layout from "../layouts/Layout";

function Map() {
  return (
    <Layout>
      <div className="flex w-full justify-center">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1gljDaAnJqKKwwR0pk0Rh4uG_-5i8BUw&ehbc=2E312F"
          width="1900"
          height="900"
        />
      </div>
    </Layout>
  );
}
export default Map;
