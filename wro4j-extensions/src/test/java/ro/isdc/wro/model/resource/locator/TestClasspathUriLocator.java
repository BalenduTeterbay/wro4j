package ro.isdc.wro.model.resource.locator;

import org.junit.Before;
import org.junit.Test;


/**
 * Tests a special test cases of the {@link ClasspathUriLocator} within the extension module.
 */
public class TestClasspathUriLocator {
  private UriLocator victim;

  @Before
  public void setUp() {
    victim = new ClasspathUriLocator();
  }

  @Test
  public void shouldLocateClasspathResourceContainingQuestionMarkInUri()
      throws Exception {
    victim = new ClasspathUriLocator();
    victim.locate("classpath:META-INF/resources/webjars/font-awesome/5.15.1/webfonts/fa-regular-400.woff?v=5.15.1");
  }
}