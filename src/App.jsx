import { useState } from "react";
import Header from "./header";
import { Button, Form, ListGroup, Modal } from "react-bootstrap";
import Homepage from "./home page";
import { FaPlus } from "react-icons/fa";
import { GrFormTrash } from "react-icons/gr";
import Lottie from "react-lottie";
import diaryAnimation from "./assets/diary.json";

const App = (props) => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [diaryID, setDiaryID] = useState("");
  const [diaryName, setDiaryName] = useState("");
  const [diaryContent, setDiaryContent] = useState("");
  const [diarys, setdiarys] = useState([
    { id: 1, name: "Diary #1", content: "Maglalaba ako today" },
    { id: 2, name: "Diary #2", content: "LFdjldj" },
  ]);

  const [page, setPage] = useState("Diary");

  function handleDelete(id) {
    const copyDiarys = [...diarys];
    const output = copyDiarys.filter((diarys) => {
      if (diarys.id != id) {
        return diarys;
      }
    });

    console.log(output);
    setdiarys(output);
  }

  function handleOpenModal(id) {
    setShowModal(true);
  }

  function handleCloseModal(id) {
    setShowModal(false);
  }

  function handleSubmit(id) {
    const data = { id: diaryID, name: diaryName, content: diaryContent };
    const copyDiarys = [...diarys];
    copyDiarys.push(data);
    console.log(copyDiarys);
    setdiarys(copyDiarys);
    handleCloseModal();
  }

  console.log(page);

  return (
    <div
      style={{
        backgroundImage: `url(/image3.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="container-fluid vh-100 d-flex align-items-center justify-content-start flex-column"
    >
      <Header
        diaryCount={diarys.length}
        handleChangeDiary={() => setPage("Diary")}
        handleChangeHome={() => setPage("home")}
      />

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Diary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="inputPassword5">Diary ID</Form.Label>
          <Form.Control
            onChange={(event) => setDiaryID(event.target.value)}
            type="text"
            placeholder="Enter Diary ID"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />

          <Form.Label htmlFor="inputPassword5">Diary Title</Form.Label>
          <Form.Control
            onChange={(event) => setDiaryName(event.target.value)}
            type="text"
            placeholder="Enter Diary Title"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />

          <Form.Label htmlFor="inputPassword5">Diary Content</Form.Label>
          <Form.Control
            onChange={(event) => setDiaryContent(event.target.value)}
            type="text"
            placeholder="Enter Diary Content"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal} variant="secondary">
            Close
          </Button>
          <Button onClick={handleSubmit} variant="primary">
            Add Diary
          </Button>
        </Modal.Footer>
      </Modal>

      {page == "home" && (
        <>
          <Homepage></Homepage>
        </>
      )}

      {page == "Diary" && (
        <div className="row  w-100 mt-3">
          <div className="col-6">
            <button onClick={handleOpenModal} className="btn btn-primary my-3">
              Create Diary <FaPlus />
            </button>

            {diarys.map((diarys) => {
              return (
                <div className="row">
                  <div className="col-9 d-flex justify-content-center align-items-center">
                    <ListGroup className="w-100">
                      <ListGroup.Item action variant="success">
                        <h3 className="fw-bold">{diarys.name}</h3>
                        {diarys.content}
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                  <div className="col-3">
                    <div className="wrapper ">
                      <button
                        onClick={(id) => handleDelete(diarys.id)}
                        className="btn btn-danger mx-3 my-3"
                      >
                        delete <GrFormTrash />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {diarys.length == 0 && (
              <h1 className="text-white">There is no diary add diary 😊</h1>
            )}
          </div>
          <div className="col-6">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: diaryAnimation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            >
              {" "}
            </Lottie>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
