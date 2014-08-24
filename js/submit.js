function submit_onload() {
    assignments_get(update_asn_list)
}

function update_asn_list(data, status) {
    var assignments = data.assignments
    console.log("assignments = " + assignments)
    $.each(assignments, function(key, value) {
        var uuid = value
        assignment_get(update_asn_list_item, uuid)
    });
}

function update_asn_list_item(data, status) {

    console.log["data = " + data]
    keys = Object.keys(data)
    console.log["keys = " + keys]
    uuid = keys[0]
    console.log["uuid = " + uuid]
    var assignment = data[uuid]
    $("select#assignment")
        .append($("<option>", { value : uuid})
                .text(assignment.name));

}

$("button#logout").click(function() {
    logout()
});
