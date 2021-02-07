import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Message } from "primereact/message";
import { TabView, TabPanel } from "primereact/tabview";
import { Toast } from "primereact/toast";
import React, { useEffect, useRef, useState } from "react";
import FormComponent from "../../common/FormComponent";
import "../../../assets/theme/CustomStyle.scss";

export const PRIVATE_USER: number = 0;
export const ASSOCIATION_USER: number = 1;

export const MALE: number = 0;
export const FEMALE: number = 1;

export const DOG: number = 0;
export const CAT: number = 1;
export const RABBIT: number = 2;

const RegisterComponent = (props: any) => {
  const toast = useRef<Toast>(null);

  useEffect(() => {}, [props.toast.loading]);

  const [activeIndex, setActiveIndex] = useState(0);
  //Owner Registration
  const [ownerType, setOwnerType] = useState<number>();

  //Puppy Registration
  const [puppyType, setPuppyType] = useState<number>();
  const [puppySex, setPuppySex] = useState<number>();

  const changeActiveIndex = (index: any) => {
    setActiveIndex(index);
    props.changeIndex(index);
  };

  const submitOwnerRegistration = () => {
    props.onSubmitOwner(ownerType);
  };

  const submitPuppyRegistration = () => {
    props.onSubmitPuppy(puppyType, puppySex);
  };

  const showToast = () => {
    toast.current?.show({
      severity: props.toast.severity,
      summary: props.toast.summary,
      detail: props.toast.message,
      life: 3000,
    });
  };

  return (
    <div id="CustomStyle" className="background-primary">
      {props.toast.loading === true && (() => showToast())()}

      <div className="row justify-content-center">
        <Toast ref={toast} />
      </div>

      {!props.account && (
        <div className="row justify-content-center">
          <div className="col-12">
            <Message
              className="mt-2 mb-2"
              severity="error"
              text="No account detected on Metamask"
            />
          </div>
        </div>
      )}

      <TabView
        activeIndex={activeIndex}
        onTabChange={(e: any) => changeActiveIndex(e.index)}
      >
        <TabPanel header="Veterinario">
          <div className="background-primary">
            <div className="container custom-container">
              <div className="row full-height justify-content-center align-items-center">
                <div className="col-lg-8 col-md-12 justify-content-center text-center">
                  <div className="card p-5">
                    <div className="col-sm-12 mb-4">
                      <div className="p-field">
                        <h1>Registrati come Veteriario</h1>
                      </div>
                    </div>

                    <FormComponent
                      json={props.VeterinarianJSON}
                      onChange={props.onChange}
                      data={props.data}
                    />

                    <div className="col-sm-12 mb-3">
                      <Button
                        label="Register Veterinarian"
                        onClick={() => props.onSubmitVeterinarian()}
                        disabled={!props.submitEnabled || !props.account}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Proprietario">
          <div className="background-primary">
            <div className="container custom-container">
              <div className="row full-height justify-content-center align-items-center">
                <div className="col-lg-8 col-md-12 justify-content-center text-center">
                  <div className="card p-5">
                    <div className="row justify-content-center">
                      <div className="col-sm-12 mb-4">
                        <div className="p-field">
                          <h1>Registrati come Proprietario</h1>
                        </div>
                      </div>

                      <div className="col-sm-12 col-lg-3 mb-3 ">
                        <div className="p-field-checkbox">
                          <Checkbox
                            inputId="private"
                            id="private"
                            value={PRIVATE_USER}
                            onChange={() => setOwnerType(PRIVATE_USER)}
                            checked={ownerType === PRIVATE_USER ? true : false}
                          />
                          <label htmlFor="private" className="p-checkbox-label">
                            {" "}
                            Private{" "}
                          </label>
                        </div>
                      </div>

                      <div className="col-sm-12 col-lg-3 mb-3 ">
                        <div className="p-field-checkbox">
                          <Checkbox
                            inputId="association"
                            id="association"
                            value={ASSOCIATION_USER}
                            onChange={() => setOwnerType(ASSOCIATION_USER)}
                            checked={
                              ownerType === ASSOCIATION_USER ? true : false
                            }
                          />
                          <label
                            htmlFor="association"
                            className="p-checkbox-label"
                          >
                            {" "}
                            Association{" "}
                          </label>
                        </div>
                      </div>
                      <FormComponent
                        json={props.OwnerJSON}
                        onChange={props.onChange}
                        data={props.data}
                      />

                      <div className="col-sm-12 mb-3">
                        <Button
                          label="Register Owner"
                          onClick={() => submitOwnerRegistration()}
                          disabled={!props.submitEnabled || !props.account}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Animale">
          <div className="background-primary">
            <div className="container custom-container">
              <div className="row full-height justify-content-center align-items-center">
                <div className="col-lg-8 col-md-12 justify-content-center text-center">
                  <div className="card p-5">
                    <div className="row justify-content-center">
                      <div className="col-sm-12 mb-4">
                        <div className="p-field">
                          <h1>Registra il tuo Animale</h1>
                        </div>
                      </div>

                      {/* Set Puppy Type */}
                      <div className="col-sm-12 col-lg-3 mb-3">
                        <div className="p-field-checkbox">
                          <Checkbox
                            inputId="dog"
                            id="dog"
                            value={DOG}
                            onChange={() => setPuppyType(DOG)}
                            checked={puppyType === DOG ? true : false}
                          />
                          <label htmlFor="dog" className="p-checkbox-label">
                            {" "}
                            Dog{" "}
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-12 col-lg-3 mb-3">
                        <div className="p-field-checkbox">
                          <Checkbox
                            inputId="cat"
                            id="cat"
                            value={CAT}
                            onChange={() => setPuppyType(CAT)}
                            checked={puppyType === CAT ? true : false}
                          />
                          <label htmlFor="cat" className="p-checkbox-label">
                            {" "}
                            Cat{" "}
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-12 col-lg-3 mb-3">
                        <div className="p-field-checkbox">
                          <Checkbox
                            inputId="rabbit"
                            id="rabbit"
                            value={RABBIT}
                            onChange={() => setPuppyType(RABBIT)}
                            checked={puppyType === RABBIT ? true : false}
                          />
                          <label htmlFor="rabbit" className="p-checkbox-label">
                            {" "}
                            Rabbit{" "}
                          </label>
                        </div>
                      </div>

                      {/* Set Sex Type */}
                      <div className="col-sm-6 col-lg-5 mb-3">
                        <div className="p-field-checkbox">
                          <Checkbox
                            inputId="male"
                            id="male"
                            value={MALE}
                            onChange={() => setPuppySex(MALE)}
                            checked={puppySex === MALE ? true : false}
                          />
                          <label htmlFor="male" className="p-checkbox-label">
                            {" "}
                            M{" "}
                          </label>
                        </div>
                      </div>

                      <div className="col-sm-6 col-lg-5 mb-3">
                        <div className="p-field-checkbox">
                          <Checkbox
                            inputId="female"
                            id="female"
                            value={FEMALE}
                            onChange={() => setPuppySex(FEMALE)}
                            checked={puppySex === FEMALE ? true : false}
                          />
                          <label htmlFor="female" className="p-checkbox-label">
                            {" "}
                            F{" "}
                          </label>
                        </div>
                      </div>

                      <FormComponent
                        json={props.PuppyJSON}
                        onChange={props.onChange}
                        data={props.data}
                      />

                      <div className="col-sm-12 mb-3">
                        <Button
                          label="Register Puppy"
                          onClick={() => submitPuppyRegistration()}
                          disabled={!props.submitEnabled || !props.account}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default RegisterComponent;
