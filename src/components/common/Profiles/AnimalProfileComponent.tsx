import React, { Fragment } from "react";
import { injectIntl } from "react-intl";
import PuppyProfile from "../../../assets/img/animal.png";

const AnimalProfileComponent = (props: any) => {
  return (
    <Fragment>
      <div className="background-primary profile">
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-12 mb-3">
            <div className="row justify-content-center">
              <div className="col-sm-12 mb-3">
                <img
                  alt="profile"
                  src={PuppyProfile}
                  className="m-2 img-circled"
                />
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-sm-12 mb-3">
                <h1>Puppy</h1>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-sm-12 mb-3">
                <h2>{props.address}</h2>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 profile-item">
                <h4 className="bold">Address: </h4>{" "}
                <p className="ml-4">{props.data.petAddress}</p>
              </div>
              <div className="col-12 profile-item">
                <h4 className="bold">Puppy Type: </h4>{" "}
                <p className="ml-4">{props.data.puppyType}</p>
              </div>
              <div className="col-12 profile-item">
                <h4 className="bold">Sex: </h4>{" "}
                <p className="ml-4">{props.data.sex}</p>
              </div>
              <div className="col-12 profile-item">
                <h4 className="bold">Name: </h4>{" "}
                <p className="ml-4">{props.data.name}</p>
              </div>
              <div className="col-12 profile-item">
                <h4 className="bold">Breed: </h4>{" "}
                <p className="ml-4">{props.data.breed}</p>
              </div>
              <div className="col-12 profile-item">
                <h4 className="bold">Birthday: </h4>{" "}
                <p className="ml-4">{props.data.birthDate}</p>
              </div>
              <div className="col-12 profile-item">
                <h4 className="bold">Distinguishing Marks: </h4>{" "}
                <p className="ml-4">{props.data.distinguishingMarks}</p>
              </div>
              <div className="col-12 profile-item">
                <h4 className="bold">Microchip: </h4>{" "}
                <p className="ml-4">{props.data.microchipId}</p>
              </div>
              <div className="col-12 profile-item">
                <h4 className="bold">Dad: </h4>{" "}
                <p className="ml-4">{props.data.dad}</p>
              </div>
              <div className="col-12 profile-item">
                <h4 className="bold">Mom: </h4>{" "}
                <p className="ml-4">{props.data.mom}</p>
              </div>
              <div className="col-12 profile-item">
                <h4 className="bold">Owner Address: </h4>{" "}
                <p className="ml-4">{props.data.ownerAddress}</p>
              </div>
              <div className="col-12 profile-item">
                <h4 className="bold">Childred: </h4>{" "}
                <p className="ml-4">{props.data.children}</p>
              </div>
              <div className="col-12 profile-item">
                <h4 className="bold">Vaccines: </h4>
                <ul>
                  {props.data.vaccines.map((vaccine: string) => {
                    return <li>{vaccine}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default injectIntl(AnimalProfileComponent);
