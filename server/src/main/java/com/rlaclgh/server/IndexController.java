package com.rlaclgh.server;
import io.sentry.Sentry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController {

  @GetMapping("")
  public void helloWorld() throws Exception {
    try {
      throw new Exception("Sentry Server Error");
    } catch (Exception e) {
      Sentry.captureException(e);
      throw new Exception(e);
    }

//    return "Hello World!!";

  }
}
