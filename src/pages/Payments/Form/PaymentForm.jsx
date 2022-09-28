import React, { useState, useContext } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AddIcon, PaymentOneIcon } from "../../../components/SideBar/icons";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ACTION_TYPES } from "../../../components/store/Actions/Actions";
import PaymentContext from "../../../components/store/paymentStore";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";

function PaymentForm(props) {
  const { state } = props;

  const [, dispatch] = useContext(PaymentContext);
  const navigate = useNavigate();

  const [installmentType, setInstallmentType] = useState("0");
  const [click, setClick] = useState([1]);

  const [, setInstallments] = useState({});
  const [, setStartDate] = useState();
  const [, setEndDate] = useState();

  //const [installmentsArray, setInstallmentsArray] = useState([])

  const handleChange = (e) => {
    dispatch({
      type: ACTION_TYPES.CHANGE,
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleStartDate = (date) => {
    setStartDate(date.toLocaleDateString("en-GB"));
    dispatch({
      type: ACTION_TYPES.CHANGE,
      payload: { name: "startDate", value: date.toLocaleDateString("en-GB") },
    });
  };

  const handleEndDate = (date) => {
    setEndDate(date.toLocaleDateString("en-GB"));
    dispatch({
      type: ACTION_TYPES.CHANGE,
      payload: { name: "endDate", value: date.toLocaleDateString("en-GB") },
    });
  };

  const handleInstallments = (e) => {
    setInstallments((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const formatString = Intl.NumberFormat("en-US");

  const handleInstallmentType = (e) => {
    setInstallmentType(e.target.value);
    setClick([1]);
  };

  const handleNewInstallment = (e) => {
    e.preventDefault();
    if (click.length <= 12) {
      setClick((prev) => [...prev, parseInt(prev[prev.length - 1] + 1)]);
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (state.amount > 0) {
      navigate("/payments/add-payment/add-reciepients");
    }
  };

  return (
    <div className="bg-white p-4 mt-8 rounded">
      <Form className="p-3" onSubmit={handlePayment}>
        <div className="my-8 justify-center flex">
          <PaymentOneIcon />
        </div>

        <div className="mt-16">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <label className="mb-2 text-sm">Dues Name</label>
              <Form.Control
                required
                name="duesName"
                value={state.duesName}
                onChange={handleChange}
              />
            </div>

            <div className="col-lg-6 mb-4">
              <label className="mb-2 text-sm">Track Payment</label>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                  <Select
                    sx={{
                      "& legend": { display: "none" },
                      "& fieldset": { top: 0 },
                    }}
                    label="Track payment"
                    name="trackPayment"
                    onChange={handleChange}
                    value={state.trackPayment}
                  >
                    <MenuItem value={0}>No</MenuItem>
                    <MenuItem value={1}>Yes</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

            <div className="col-lg-6 mb-4">
              <label className="mb-2 text-sm">Status</label>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                  <Select
                    sx={{
                      "& legend": { display: "none" },
                      "& fieldset": { top: 0 },
                    }}
                    label="Status"
                    onChange={handleChange}
                    value={state.status}
                    name="status"
                  >
                    <MenuItem value={0}>Active</MenuItem>
                    <MenuItem value={1}>Inactive</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

            <div className="col-lg-6 mb-4">
              <label className="mb-2 text-sm">Amount Type</label>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                  <Select
                    sx={{
                      "& legend": { display: "none" },
                      "& fieldset": { top: 0 },
                    }}
                    label="Amount Type"
                    onChange={handleChange}
                    value={state.amountType}
                    name="amountType"
                    disabled={state.paymentPlan === 1 ? true : false}
                  >
                    <MenuItem value={0}>Fixed</MenuItem>
                    <MenuItem value={1}>Flexible</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

            {state.amountType === 0 && (
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <label className="mb-2 text-sm">Amount</label>
                    <InputGroup className="mb-3">
                      <InputGroup.Text
                        id="basic-addon1"
                        style={{
                          backgroundColor: "transparent",
                          borderRight: 0,
                        }}
                      >
                        ₦
                      </InputGroup.Text>
                      <Form.Control
                        onChange={handleChange}
                        value={
                          isNaN(state.amount)
                            ? 0
                            : formatString.format(state.amount)
                        }
                        name="amount"
                        type="text"
                        required
                        style={{ borderLeft: 0 }}
                      />
                    </InputGroup>
                  </div>

                  <div className="col-lg-6 mb-4">
                    <label className="mb-2 text-sm">Payment Plan</label>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth size="small">
                        <Select
                          value={state.paymentPlan}
                          name="paymentPlan"
                          label="Payment Plan"
                          onChange={handleChange}
                          sx={{
                            "& legend": { display: "none" },
                            "& fieldset": { top: 0 },
                          }}
                        >
                          <MenuItem value={0}>Full</MenuItem>
                          <MenuItem value={1}>Installment</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                </div>
              </div>
            )}

            {/* User chooses full Payment plan */}

            {state.paymentPlan === 0 && (
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <label className="mb-2 text-sm">Start Date</label>
                    <DatePicker
                      //style={{border:"1px solid #ced4da"}}
                      minDate={new Date()}
                      required
                      name="startDate"
                      value={state.startDate}
                      onChange={handleStartDate}
                      className="w-full border h-full p-2 rounded border-gray-600"
                      placeholderText="dd/mm/yyyy"
                    />
                  </div>

                  <div className="col-lg-6 mb-3">
                    <label className="mb-2 text-sm">End Date</label>
                    <DatePicker
                      //style={{border:"1px solid #ced4da"}}
                      minDate={new Date()}
                      required
                      name="endDate"
                      value={state.endDate}
                      onChange={handleEndDate}
                      className="w-full border h-full p-2 rounded border-gray-600"
                      placeholderText="dd/mm/yyyy"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* User chooses installment plan */}

            {state.paymentPlan === 1 && (
              <>
                <p className="my-3 font-semibold">Installment Setting</p>
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <label className="mb-2 text-sm">Installment Type</label>
                    <Form.Select
                      value={installmentType}
                      onChange={handleInstallmentType}
                    >
                      <option value={"0"}>Percentage</option>
                      <option value={"1"}>Amount</option>
                    </Form.Select>
                  </div>

                  {/* User chooses Percentage */}

                  {installmentType === "0" && (
                    <div className="col-lg-12">
                      {click.map((item) => {
                        return (
                          <div className="row mb-8" key={item + 1}>
                            <p className="text-primary">Installment {item}</p>
                            <div className="col-lg-4 mb-3">
                              <label className="mb-2 text-sm">
                                Installment Amount
                              </label>
                              <InputGroup className="mb-3">
                                <InputGroup.Text
                                  id="basic-addon1"
                                  style={{
                                    backgroundColor: "transparent",
                                    borderRight: 0,
                                  }}
                                >
                                  %
                                </InputGroup.Text>
                                <Form.Control
                                  required
                                  type="number"
                                  name={`installmentAmount${item}`}
                                  onChange={handleInstallments}
                                  style={{ borderLeft: 0 }}
                                />
                              </InputGroup>
                            </div>

                            <div className="col-lg-4 mb-3">
                              <label className="mb-2 text-sm">Start Date</label>
                              <Form.Control
                                required
                                type="date"
                                name={`startDate${item}`}
                                onChange={handleInstallments}
                              />
                            </div>

                            <div className="col-lg-4 mb-3">
                              <label className="mb-2 text-sm">End Date</label>
                              <Form.Control
                                required
                                type="date"
                                name={`endDate${item}`}
                                onChange={handleInstallments}
                              />
                            </div>
                          </div>
                        );
                      })}

                      <button
                        onClick={handleNewInstallment}
                        disabled={click.length >= 12 ? true : false}
                        className="flex items-center mb-4"
                      >
                        <AddIcon />{" "}
                        <span
                          className={`${
                            click.length >= 12 ? "text-muted" : "text-primary"
                          }`}
                        >
                          Add another amount set
                        </span>{" "}
                      </button>

                      <p className="text-muted text-xs">
                        Max of 12 Installments
                      </p>

                      {/* Installment list  */}
                      <div className="mt-20 text-base">
                        <p className="text-gray-700">
                          Total Amount: ₦ {formatString.format(state.amount)}
                        </p>
                        <p className="text-gray-700 text-primary">
                          Installment 1: ₦ 20,000
                        </p>
                        <p className="text-gray-700 text-success">
                          Balance 1: ₦ 80,000
                        </p>
                      </div>
                    </div>
                  )}

                  {/* User chooses Amount */}

                  {installmentType === "1" && (
                    <div className="col-lg-12">
                      {click.map((item) => {
                        return (
                          <div className="row mb-8" key={item}>
                            <p className="text-primary">Installment {item}</p>
                            <div className="col-lg-4 mb-3">
                              <label className="mb-2 text-sm">
                                Installment Amount Naira
                              </label>

                              <InputGroup className="mb-3">
                                <InputGroup.Text
                                  id="basic-addon1"
                                  style={{
                                    backgroundColor: "transparent",
                                    borderRight: 0,
                                  }}
                                >
                                  ₦
                                </InputGroup.Text>
                                <Form.Control
                                  required
                                  type="number"
                                  name={`installmentAmount${item}`}
                                  style={{ borderLeft: 0 }}
                                />
                              </InputGroup>
                            </div>

                            <div className="col-lg-4 mb-3">
                              <label className="mb-2 text-sm">Start Date</label>
                              <Form.Control
                                required
                                type="date"
                                name={`startDateAmount${item}`}
                              />
                            </div>

                            <div className="col-lg-4 mb-3">
                              <label className="mb-2 text-sm">End Date</label>
                              <Form.Control
                                required
                                type="date"
                                name={`endDateAmount${item}`}
                              />
                            </div>
                          </div>
                        );
                      })}

                      <button
                        onClick={handleNewInstallment}
                        disabled={click.length >= 12 ? true : false}
                        className="flex items-center mb-4"
                      >
                        <AddIcon />{" "}
                        <span
                          className={`${
                            click.length >= 12 ? "text-muted" : "text-primary"
                          }`}
                        >
                          Add another amount set
                        </span>{" "}
                      </button>

                      <p className="text-muted text-xs">
                        Max of 12 Installments
                      </p>

                      {/* Installment list  */}
                      <div className="mt-20 text-base">
                        <p className="text-gray-700">
                          Total Amount: ₦ {formatString.format(state.amount)}
                        </p>
                        <p className="text-gray-700 text-primary">
                          Installment 1: ₦ 20,000
                        </p>
                        <p className="text-gray-700 text-success">
                          Balance 1: ₦ 80,000
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
            <div className="mt-5 flex justify-end">
              <Button
                type="submit"
                variant="contained"
                className="btn btn-primary no-underline"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default PaymentForm;
