import './dashboardPage.css'

const DashboardPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!"); // Kiểm tra xem có log không

    const text = e.target.text.value;
    console.log("Text input:", text); // Kiểm tra giá trị nhập vào

    if (!text) return;

    await fetch("http://localhost:3000/api/chats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    console.log("Request sent to backend!");
};


  return (
    <div className='dashboardPage'>
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="" />
          <h1>MEN AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat.png" alt="" />
            <span>Create a new chat</span>
          </div>
          <div className="option">
            <img src="/image.png" alt="" />
            <span>Analyze Images</span>
          </div>
          <div className="option">
            <img src="/code.png" alt="" />
            <span>Help me with my Code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <input type="text" name='text' placeholder='Ask me anything...' required/>
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default DashboardPage
