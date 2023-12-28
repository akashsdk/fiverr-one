import React, { useState } from "react";
import "../Style/Contact.css";

import { Button, Form, Input, Modal, Tooltip, message } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default function Contact() {
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  const { TextArea } = Input;

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
    setOpen(false);
  };

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const isButtonDisabled =
    newName === "" || newEmail === "" || newPhone === "" || newMessage === "";

  const text = <span>please! fill up the form</span>;

  const onChange = (event) => {
    setNewMessage(event.target.value);
    console.log("Change:", event.target.value);
  };

  return (
      <div id="Contact" className="contactBody">
        {contextHolder}

        <div className="contactLeftright">
          <h2 className="contactLeftrightH2">Easy to Contact</h2>
          <div className="contactLeftrightLine" />
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            className="contactFrom"
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
              />
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  required: true,
                  type: "email",
                },
              ]}
            >
              <Input
                onChange={(event) => {
                  setNewEmail(event.target.value);
                }}
              />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                onChange={(event) => {
                  setNewPhone(event.target.value);
                }}
              />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              // rules={[
              //   {
              //     required: true,
              //   },
              // ]}
            >
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="contact-Select"
              >
                <option value="">Select an option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </Form.Item>
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) =>
                prevValues.gender !== currentValues.gender
              }
            >
              {({ getFieldValue }) =>
                getFieldValue("gender") === "other" ? (
                  <Form.Item name="customizeGender" label="Customize Gender">
                    <Input
                      onChange={(event) => {
                        setSelectedOption(event.target.value);
                      }}
                    />
                  </Form.Item>
                ) : null
              }
            </Form.Item>

            <Form.Item
              name="message"
              label="Message"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextArea showCount maxLength={500} onChange={onChange} />
            </Form.Item>

            {/* Button */}
            <Form.Item {...tailLayout}>
              <Tooltip placement="topLeft" title={isButtonDisabled ? text : ""}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    marginLeft: "-10px",
                    color: "#ffff",
                    backgroundColor: "rgb(116, 32, 250)",
                  }}
                  disabled={isButtonDisabled}
                >
                  Submit
                </Button>
              </Tooltip>

              <Button
                htmlType="button"
                style={{ marginLeft: "10px" }}
                onClick={showModal}
              >
                Reset
              </Button>
              <Modal
                title="Confirm to Reset !"
                open={open}
                onOk={onReset}
                onCancel={hideModal}
                okText="Reset"
                cancelText="Cancel"
              ></Modal>
            </Form.Item>
          </Form>
        </div>
    </div>
  );
}
