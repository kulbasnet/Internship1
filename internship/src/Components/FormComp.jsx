import React from "react";
import { Form, Input, Button, Upload, Row, Col, Select } from "antd";

const { Option } = Select;

function FormComp(){
  function handleFileUpload (file){
    alert("File uploaded:", file);
  };

  return (
    <div className="form-container">
      <div className="inside-form">
        <div className="inside-form-para">
           <h2 >Tell us more about your business</h2>
      <p>
        Your info is like the Wi-Fi password—totally crucial for keeping things
        running, impressing the money folks, and making sure you get top-notch
        service without any buffering!
      </p>

        </div>
     
      <Form
        layout="vertical"
        className="business-form"
        initialValues={{ remember: true }}
        autoComplete="off">

        <Row gutter={16}>
          <Col span={12}>
          <Form.Item
            label="Legal Name"
            name="legalName"
            rules={[{ required: true, message: "Please enter legal name!" }]}>

          <Input placeholder="Legal name" />
          </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
            label="Doing Business As"
            name="doingBusinessAs"
            rules={[{ required: true, message: "Please enter business name!" }]}>
              <Input placeholder="Doing business as" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
            label="Company Registration Number"
            name="companyRegNum"
            rules={[{ required: true,message: "Please enter your registration number!"}]}>
              <Input placeholder="Company Registration Number" type="number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
            label="Random Registration Number"
            name="randomRegNum"
            rules={[{ required: true, message: "Please enter a random number!" }]}>
            <Input placeholder="Random Registration Number" />
            </Form.Item>
          </Col>
        </Row>


        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
            label="Website URL"
              name="websiteURL"
            rules={[{ required: true, message: "Please enter website URL!" }]}>
              <Input placeholder="Website URL" />
            </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
            label="Industry Name"
            name="industryName"
            rules={[{ required: true, message: "Please select an industry!" }]}>
            <Select placeholder="Select Industry">
              <Option value="technology">Technology</Option>
              <Option value="finance">Finance</Option>
                <Option value="healthcare">Healthcare</Option>
              <Option value="education">Education</Option>
              <Option value="manufacturing">Manufacturing</Option>
              <Option value="retail">Retail</Option>
                <Option value="other">Other</Option>
         </Select>
        </Form.Item>
        </Col>
        </Row>

        <Row gutter={16}>
         <Col span={12}>
         <Form.Item
         label='Location'
         name="Location"
         rules={[{required:true, message:"Please select your location"}]} 
         >
          <Select placeholder="Select Location">
            <Option value="Kathmandu">Kathmandu</Option>
            <Option value="Kathmandu">Lalitpur</Option>
            <Option value="Kathmandu">Butwal</Option>
            <Option value="Kathmandu">Phaplu</Option>
            <Option value="Kathmandu">Pokhara</Option>
            <Option value="Kathmandu">Jumla</Option>

          </Select>

          </Form.Item>
         </Col>

         <Col span={12}>
         <Form.Item
         label="Which dropDown would you like to select?"
         name='Drop'
         rules={[{required:true,message:'please select one'}]}>
          <Select placeholder="Select one">
            <Option value="Normal">Normal</Option>
            <Option value='Smooth'>Smooth</Option>
          </Select>
         </Form.Item>
         
         </Col>
         </Row>

         <Row gutter={16}>
          <Col span={12}>
          <Form.Item 
          label="Another Random Drop down"
          name="Rand"
          rules={[{required:true, message:"Please select one"}]}>
            <Select placeholder="Select one">
              <Option value="===">=</Option>
              <Option value="-">=</Option>
            </Select>
          </Form.Item>
          </Col>

          <Col span={12}>
          <Form.Item 
          label="Account Usage Intent"
          name="accountUsage"
          rules={[{required:true,message:""}]}>

            <Select placeholder="Please select one">
              <Option value="Personal">Personal</Option>
              <Option value="Company">Company</Option>
              <Option value="Teaching">Teaching</Option>
              <Option value="Buisness">Buisness</Option>

            </Select>
          </Form.Item>
          </Col>
         </Row>

         <Row gutter={16}>
          <Col span={12}>
          <Form.Item
          label="Random count per month"
          name="count"
          rules={[{required:true, message:"Please insert a value"}]}>
            <Input placeholder="Put the value get the answer" type="number"/>
          </Form.Item>
          </Col>

          <Col span={12}>
          <Form.Item
          label="Expected total visit in this page"
          name="visitPage"
          rules={[{required:true, message:"Please insert a value"}]}>
            <Input placeholder="In Number" type="number"/>
          </Form.Item>
          </Col>

         </Row>

         <Row gutter={16}>
          <Col span={12}>
          <Form.Item 
          label="Purpose of using fake form"
          name="purposeFake"
          rules={[{required:true,message:'Please fill the the input'}]}>
            <Input placeholder="Purpose of using fake form"/>

          </Form.Item>
          </Col>

          <Col span={12}>
          <Form.Item 
          label=" Product Description"
          name="Desc"
          rules={[{required:true,message:'Please fill the description'}]}>
            <Input placeholder=" Product Description"/>

          </Form.Item>
          </Col>


         </Row>

             <Row gutter={16}>
            <Col span={12}>
            <Form.Item 
            label="Contact Email"
            name="contactEmail"
            rules={[{required:true,message:"Insert your Email"}]}>
              <Input type="email" placeholder="Contact Email"/>
            </Form.Item>
            </Col>
          </Row>


        <Form.Item
          label="Certification of Incorporation"
          name="certificationFile"
          rules={[
            { required: true, message: "Please upload the certification file!" },
          ]}
        >
          <Upload.Dragger
          beforeUpload={handleFileUpload}
          maxCount={1}
          accept=".pdf,.jpg,.png"
          className="custom-upload-dragger"
        >
          <div className="upload-container">
            <p>Click to Upload or drag</p>
            <p className="file-helper-text">Maximum file size: 50 MB</p>

          </div>
          </Upload.Dragger>
        </Form.Item>

          <Form.Item
            label="Company Logo"
            name="companyLogo"
            rules={[{ required: true, message: "Please upload the company logo!" }]}
          >
            <Upload.Dragger
              beforeUpload={handleFileUpload}
              maxCount={1}
              accept=".jpg,.png"
      
            >
              <div className="upload-container2">

              <p>Click to Upload</p>
            <p className="file-helper-text">Maximum file size: 50 MB</p>



              </div>
            </Upload.Dragger>

          </Form.Item>

        {/* Buttons */}
        <div className="form-buttons">
          <Button type="default" className="but-prev">Previous</Button>
          <Button type="primary" htmlType="submit" className="but-next">Next</Button>
        </div>
      </Form>



      </div>
    </div>
  );
};

export default FormComp;
