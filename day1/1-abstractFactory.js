// Abstract Factory
class StudentFactory {
  createWorkspace() {
    throw new Error('createWorkspace() must be implemented');
  }
  createCommunicationTool() {
    throw new Error('createCommunicationTool() must be implemented');
  }
  createAttendanceTracker() {
    throw new Error('createAttendanceTracker() must be implemented');
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Concrete Factories

// Online Student
class OnlineStudentFactory extends StudentFactory {
  createWorkspace() {
    return new OnlineStudentWorkspace();
  }

  createCommunicationTool() {
    return new OnlineStudentCommunicationTool();
  }

  createAttendanceTracker() {
    return new OnlineStudentAttendanceTracker();
  }
}

// -------------------------------------------------------

// OnCampus Student
class OnCampusStudentFactory extends StudentFactory {
  createWorkspace() {
    return new OnCampusStudentWorkspace();
  }

  createCommunicationTool() {
    return new OnCampusStudentCommunicationTool();
  }

  createAttendanceTracker() {
    return new OnCampusStudentAttendanceTracker();
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Products
class Workspace {
  getLocation() {
    throw new Error('getLocation() must be implemented');
  }
}

class CommunicationTool {
  joinMeeting() {
    throw new Error('joinMeeting() must be implemented');
  }
}

class AttendanceTracker {
  validateCheckIn() {
    throw new Error('validateCheckIn() must be implemented');
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Concrete Products

// Online Student
class OnlineStudentWorkspace extends Workspace {
  getLocation() {
    return 'https://teams.microsoft.com/l/meetup-join/';
  }
}

class OnlineStudentCommunicationTool extends CommunicationTool {
  joinMeeting() {
    console.log('Opening a video conferencing link');
  }
}

class OnlineStudentAttendanceTracker extends AttendanceTracker {
  validateCheckIn() {
    console.log('Raise hand');
  }
}

// -------------------------------------------------------

// OnCampus Student
class OnCampusStudentWorkspace extends Workspace {
  getLocation() {
    return 'https://maps.app.goo.gl/HAwobWFeQ49foawz6';
  }
}

class OnCampusStudentCommunicationTool extends CommunicationTool {
  joinMeeting() {
    console.log('Providing a map to a physical room');
  }
}

class OnCampusStudentAttendanceTracker extends AttendanceTracker {
  validateCheckIn() {
    console.log('Provide physical ID card');
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Usage

function studentManager(factory) {
  const workspace = factory.createWorkspace();
  const communicationTool = factory.createCommunicationTool();
  const attendanceTracker = factory.createAttendanceTracker();

  console.log(workspace.getLocation());
  communicationTool.joinMeeting();
  attendanceTracker.validateCheckIn();
}

const factory = new OnlineStudentFactory();
studentManager(factory);

console.log('-------------------------------------------');

const factory2 = new OnCampusStudentFactory();
studentManager(factory2);
