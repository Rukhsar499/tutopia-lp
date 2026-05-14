document.querySelectorAll(".enquiryForm").forEach(function(form) {

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = form.querySelector('[name="name"]').value;
    let phone = form.querySelector('[name="phone"]').value;
    let board = form.querySelector('[name="board"]').value;
    let class_name = form.querySelector('[name="class_name"]').value;
    let date = form.querySelector('[name="date"]').value;
    let time = form.querySelector('[name="time"]').value;

    let utmsrc = new URLSearchParams(window.location.search).get("utm_source");
    let utmmedium = new URLSearchParams(window.location.search).get("utm_medium");
    let utmcampaign = new URLSearchParams(window.location.search).get("utm_campaign");

    fetch("https://lcapi.tutopiacrm.in/api/data/collect_data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "DATA_KEY": "b77a5c561934e089STVa54e08c5619"
        },
        body: JSON.stringify([
            {
                "candidate_name": name,
                "candidate_number": phone,
                "class_name": class_name,
                "source": "Google Search",
                "enquiry_type": "",
                "utm_Source": utmsrc || "",
                "data_provider": "DW",
                "entry_by": "9998887771",
                "extra_fields": {
                    "Board": board,
                    "Preferred_Date": date,
                    "Preferred_Time": time,
                    "UTM_Medium": utmmedium || "",
                    "UTM_Campaign": utmcampaign || "",
                    "UTM_Url": window.location.href,
                    "Page_url": window.location.pathname,
                    "Data_Source": "Website Form"
                }
            }
        ])
    })
    .then(response => response.json())
.then(data => {

   if (data.status == 200 || data.error == 0) {
    window.location.href = "thankyou.html";
} else {
    alert("Form submission failed!");
    console.log(data);
}

})
.catch(error => {
    alert("Something went wrong!");
    console.log(error);
});

});

});
