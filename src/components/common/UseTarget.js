import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Target() {
  const { offer, jsonLoading } = useSelector((state) => state);
  const { id } = useParams();

  const target = offer.find((el) => el.id === id);
  if (jsonLoading) {
    return target;
  }
}

export default Target;
